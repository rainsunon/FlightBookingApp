import { CanActivateFn, Router } from '@angular/router';
import { inject, Injectable } from '@angular/core';

export function confirmationGuard(): CanActivateFn {
  return () => {
    const isConfirmedService: ConfirmationService = inject(ConfirmationService);
    const router: Router = inject(Router);

    if (isConfirmedService.getIsConfirmed()) {
      return true;
    }
    router.navigate(['/']);
    return false;
  };
}

export function errorGuard(): CanActivateFn {
  return () => {
    const isErrorService: ErrorService = inject(ErrorService);
    const router: Router = inject(Router);

    if (isErrorService.getIsError()) {
      return true;
    }
    router.navigate(['/']);
    return false;
  };
}

@Injectable()
export class ConfirmationService {
  isConfirmed = false;

  setIsConfirmed() {
    this.isConfirmed = true;
  }
  getIsConfirmed(): boolean {
    return this.isConfirmed;
  }
}

@Injectable()
export class ErrorService {
  isError = false;

  setIsError() {
    this.isError = true;
  }
  getIsError(): boolean {
    return this.isError;
  }
}
