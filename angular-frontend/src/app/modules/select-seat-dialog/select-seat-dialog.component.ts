import { Component, Inject } from '@angular/core';
import { Seat } from '../../core/models/Seat';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FlightDataService } from '../../core/services/FlightDataService';

export interface DialogData {
  seats: Seat[];
}

@Component({
  selector: 'app-select-seat-dialog',
  templateUrl: './select-seat-dialog.component.html',
  styleUrls: ['./select-seat-dialog.component.css']
})
export class SelectSeatDialogComponent {
  seatClasses: string[] = [];
  selectedSeat: Seat;

  seatForm = new FormGroup({
    seatClass: new FormControl('', Validators.required),
    aisle: new FormControl('', Validators.required),
    row: new FormControl('', Validators.required)
  });

  constructor(
    public dialogRef: MatDialogRef<SelectSeatDialogComponent>,
    private flightDataService: FlightDataService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    for (let i = 0; i < this.data.seats.length; i++) {
      const seatClass = this.data.seats[i].seatClass;
      if (!this.seatClasses.includes(seatClass)) {
        this.seatClasses.push(seatClass);
      }
    }
  }

  getSeat() {
    this.data.seats.forEach((seat) => {
      if (
        seat.aisle == this.seatForm.value.aisle &&
        seat.row == this.seatForm.value.row
      ) {
        this.selectedSeat = seat;
      }
    });
  }

  onSubmit(): void {
    this.dialogRef.close();
    const seatId = this.selectedSeat.seatId;
    this.flightDataService.reserveSeat(seatId);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
