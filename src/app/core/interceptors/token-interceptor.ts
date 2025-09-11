import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => 
{

  // if( !req.url.includes("products") || req.url.includes("categories") ) return next(req) ;


 const platform = inject(PLATFORM_ID);
 if(isPlatformBrowser(platform))
 {   
    const usertoken = localStorage.getItem("token") ;  
  if(usertoken)
  {
    req = req.clone(
      {
        setHeaders : {
          token : usertoken ,
        }
      }
    )
  }
 }

  return next(req);
};
