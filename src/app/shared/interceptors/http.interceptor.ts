import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthVariablesService } from '../../auth/auth-variables.service';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {

  const authVService = inject(AuthVariablesService);

  const reqWithHeader = req.clone({
    setHeaders: {
      'Content-Type': 'application/json',
      'Authorization': authVService.isLogged ? 'Bearer ' + authVService.authInfo.token : ''
    }
  })
  
  return next(reqWithHeader);
};
