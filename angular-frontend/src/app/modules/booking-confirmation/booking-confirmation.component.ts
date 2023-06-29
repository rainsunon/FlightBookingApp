import { Component, OnInit } from '@angular/core';
import { Flight } from '../../core/models/Flight';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent implements OnInit {
  state: any;
  flight: Flight;

  ngOnInit() {
    this.state = history.state;
    this.flight = this.state.flight;
  }
}
