import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectFlightComponent } from './modules/select-flight/select-flight.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { SearchFlightComponent } from './modules/search-flight/search-flight.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ErrorComponent } from './modules/error/error.component';
import { BookingConfirmationComponent } from './modules/booking-confirmation/booking-confirmation.component';
import {
  ConfirmationService,
  ErrorService
} from './core/services/ConfirmationGuard';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SelectSeatDialogComponent } from './modules/select-seat-dialog/select-seat-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectFlightComponent,
    PageNotFoundComponent,
    SearchFlightComponent,
    ErrorComponent,
    BookingConfirmationComponent,
    FooterComponent,
    HeaderComponent,
    SelectSeatDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule
  ],
  providers: [ConfirmationService, ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
