import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => 
{
  const toastr = inject(ToastrService);
  return next(req).pipe(catchError(
    (error) => {
      // console.log(error);
     toastr.success(`${error.error.message}`) ;  
    return throwError(() => error ) ;
  }));
};
