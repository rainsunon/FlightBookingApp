import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightDataService } from '../../core/services/FlightDataService';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  readonly API_URL = 'http://localhost:8080/api/v1';
  departures: any[] = [];
  destinations: any[] = [];

  flightForm = new FormGroup({
    departure: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required)
  });

  constructor(
    private http: HttpClient,
    private router: Router,
    private flightDataService: FlightDataService
  ) {}

  ngOnInit() {
    this.flightDataService.getFlights();
    this.destinations = this.flightDataService.destinations;
    this.departures = this.flightDataService.departures;
  }

  onSubmit() {
    this.router.navigate(['/booking'], {
      queryParams: {
        departure: this.flightForm.value.departure,
        destination: this.flightForm.value.destination
      }
    });
  }
}
