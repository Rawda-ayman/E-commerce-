import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => 
{
   const ngxspinnerservice = inject(NgxSpinnerService) ;
   ngxspinnerservice.show();

   return next(req).pipe( 
    finalize(() => ngxspinnerservice.hide()) 
   )
   
};
