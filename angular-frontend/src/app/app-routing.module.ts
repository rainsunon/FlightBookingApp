import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectFlightComponent } from './modules/select-flight/select-flight.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { SearchFlightComponent } from './modules/search-flight/search-flight.component';
import { ErrorComponent } from './modules/error/error.component';
import { BookingConfirmationComponent } from './modules/booking-confirmation/booking-confirmation.component';
import {
  confirmationGuard,
  errorGuard
} from './core/services/ConfirmationGuard';

const routes: Routes = [
  { path: 'search', component: SearchFlightComponent },
  { path: 'booking', component: SelectFlightComponent },
  { path: 'error', component: ErrorComponent, canActivate: [errorGuard()] },
  {
    path: 'confirmation',
    component: BookingConfirmationComponent,
    canActivate: [confirmationGuard()]
  },
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
