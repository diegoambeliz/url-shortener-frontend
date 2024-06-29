import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './shared/interceptors/http.interceptor';
import { provideNgVibeDialog } from '@ng-vibe/dialog';
import { provideNgVibeToastify } from '@ng-vibe/toastify';
import { errorInterceptor } from './shared/interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(withInterceptors([httpInterceptor, errorInterceptor])),
    provideNgVibeDialog(),
    provideNgVibeToastify()
  ]
};
