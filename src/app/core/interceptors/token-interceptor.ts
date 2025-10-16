import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => 
{
  //  before request is sent . 
  // if url includes products - categories - brands - etc --> will not get token
    // if( !req.url.includes("cart") || req.url.includes("orders") ||  req.url.includes("wishlists") || req.url.includes("verifyToken")) return next(req) ;

  
// else if url includes cart or orders --> get token . I must check that I get token when I on browser
 const platform = inject(PLATFORM_ID);
 if(isPlatformBrowser(platform))
 {   
    const usertoken = localStorage.getItem("token") ;  
  if(usertoken)
  {
    // request باخد نسخه من
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
