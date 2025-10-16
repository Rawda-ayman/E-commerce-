import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const userGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => 
  {
   //  ف هتدخل الابلكيشن user يبقي انت token ده هو بما ان فيهguardمهمه ال
   // signinو مش هتخرج لصفحه ال
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
   // لحد ما تسجل دخول signin pageف هتفضل في الuser ف ده معناه انك مش token غير كده يبقي ملكش 
     else 
     {
      // router.navigateByUrl("/signup");
      return true ; 
     }
     
    }
    return true ;
 };
