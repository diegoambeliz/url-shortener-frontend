import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { AppearanceAnimation, ProgressBar, TextAlignEnum, ToastPosition, ToastTypeEnum, ToastifyRemoteControl } from '@ng-vibe/toastify';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const toast: ToastifyRemoteControl = new ToastifyRemoteControl();

  toast.options = {
    title: "Error",
    autoCloseDuration: 3000,
    layoutType: ToastTypeEnum.DANGER,
    position: ToastPosition.BOTTOM_RIGHT,
    progressBar: ProgressBar.DECREASE,
    textAlign: TextAlignEnum.START,
    animationIn: AppearanceAnimation.BOUNCE_IN,
  }

  return next(req).pipe(catchError((err) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          toast.options.text = "Unauthorized Access"
        } else {
          // Handle other HTTP error codes
          toast.options.text = 'HTTP error: ' + err.error;
        }
      } else {
        // Handle non-HTTP errors
        toast.options.text = 'An error occurred:' + err.error;
      }

      if(toast.options.text)
        toast.openToast();

      // Re-throw the error to propagate it further
      return throwError(() => err); 
  }));
};
