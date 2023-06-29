import { Injectable } from '@angular/core';
import { Flight } from '../models/Flight';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfirmationService, ErrorService } from './ConfirmationGuard';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {
  readonly API_URL = 'http://localhost:8080/api/v1';
  public flights: Flight[] = [];
  departures: any[] = [];
  destinations: any[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private confirmationService: ConfirmationService,
    private errorService: ErrorService
  ) {}

  getFlights() {
    this.http
      .get<Flight[]>(this.API_URL + '/flights', { responseType: 'json' })
      .subscribe((res) =>
        res.forEach((value) => {
          const flight = <Flight>value;
          this.flights?.push(flight);

          if (this.departures.indexOf(value.departure) === -1) {
            this.departures.push(value.departure);
          }
          if (this.destinations.indexOf(value.destination) === -1) {
            this.destinations.push(value.destination);
          }
        })
      );
  }

  getFlightsForDepartureAndDestination(departure: string, destination: string) {
    return this.flights?.filter((flight) => {
      return (
        flight.destination === destination && flight.departure === departure
      );
    });
  }

  reserveSeat(seatId: string) {
    this.http
      .put<any>(
        this.API_URL + '/flights/' + seatId,
        {},
        { observe: 'response' }
      )
      .subscribe({
        next: (data) => {
          console.log(data.status);
          if (data.status === 200 || data.status === 202) {
            this.confirmationService.setIsConfirmed();
            this.router.navigate(['/confirmation'], {
              state: { flight: data.body }
            });
          }
          if (data.status === 204) {
            this.errorService.setIsError();
            this.router.navigate(['/error']);
          }
        },
        error: () => {
          this.errorService.setIsError();
          this.router.navigate(['/error']);
        }
      });
  }
}
