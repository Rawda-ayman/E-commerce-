import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const userGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => 
  {
     const router = inject(Router) ;
     const platform = inject(PLATFORM_ID);
     if(isPlatformBrowser(platform))
      {
       const token = localStorage.getItem("token") ;   
       if(token) 
     {
        // router.navigateByUrl("/home") ;
        // return false ;
        return router.parseUrl("/home"); 
     }
     else 
     {
      // router.navigateByUrl("/signup");
      return true ; 
     }
     
    }
    return true ;
 };
