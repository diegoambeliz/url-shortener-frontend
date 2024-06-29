import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthVariablesService } from '../auth-variables.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthVariablesService);
  const router = inject(Router);

  if (authService.isLogged) {
    router.navigate(['/dashboard']);
    return false;
  }

  return true;
};

export const authGuardNotLogged: CanActivateFn = (route, state) => {
  const authService = inject(AuthVariablesService);
  const router = inject(Router);

  if (!authService.isLogged) {
    router.navigate(['/']);
    return false;
  }

  return true;
};
