import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightDataService } from '../../core/services/FlightDataService';
import { Flight } from '../../core/models/Flight';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Seat } from '../../core/models/Seat';
import * as moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import { SelectSeatDialogComponent } from '../select-seat-dialog/select-seat-dialog.component';

@Component({
  selector: 'app-select-flight',
  templateUrl: './select-flight.component.html',
  styleUrls: ['./select-flight.component.css']
})
export class SelectFlightComponent implements OnInit {
  flights: Flight[] = [];
  seatsForFlight: Seat[] = [];
  departure: string;
  destination: string;
  displaySeats: boolean;

  dateForm = new FormGroup({
    date: new FormControl('', Validators.required)
  });

  myFilter = (d: Date | null): boolean => {
    const testDates: Date[] = [];
    this.flights.forEach((flight) => {
      testDates.push(new Date(flight.date));
    });

    return (
      testDates.findIndex(
        (testDate) => d?.toDateString() == testDate.toDateString()
      ) >= 0
    );
  };

  constructor(
    private route: ActivatedRoute,
    private flightDataService: FlightDataService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.displaySeats = false;
    this.route.queryParams.subscribe((params) => {
      this.departure = params['departure'];
      this.destination = params['destination'];
    });

    this.flights = this.flightDataService.getFlightsForDepartureAndDestination(
      this.departure,
      this.destination
    );
  }

  onSubmit(): void {
    const formattedDate = moment(this.dateForm.value.date).format('YYYY-MM-DD');
    this.flights.forEach((flight) => {
      if (flight.date == formattedDate) {
        flight.seats.forEach((seat) => {
          if (!seat.isReserved) {
            this.seatsForFlight.push(seat);
          }
        });
      }
    });

    const dialogRef = this.dialog.open(SelectSeatDialogComponent, {
      data: { seats: this.seatsForFlight },
      panelClass: 'dialog-responsive'
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
