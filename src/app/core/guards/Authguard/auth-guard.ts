import { isPlatformBrowser} from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { jwtDecode } from "jwt-decode";
import { Auth } from '../../../features/auth/services/auth.services';
export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => 
  {

     const router = inject(Router);
     const platform = inject(PLATFORM_ID);
     const authservice = inject(Auth) ;
     if(isPlatformBrowser(platform))
      {
        const token = localStorage.getItem("token");
        if(token)
      {
         try
         {
            const userdata = (jwtDecode(token) as {id:string});
             localStorage.setItem("userId",userdata.id ); 
         }
         catch
         {
            authservice.SignOut() ;
         }
         return true ;
      }
    else 
   {
  // router.navigateByUrl("/signin") ; 
  // return false ;
  return router.parseUrl("/signin");
  }
}
  return true;
};
