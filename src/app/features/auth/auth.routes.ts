import { Routes } from '@angular/router'; 
import { SigninPage } from './pages/signin-page/signin-page';


export const Auth:Routes = 
[  
    {
      path:"",loadComponent:() => import("./pages/signin-page/signin-page").then((m) => m.SigninPage)
    },
    {
     path:"signin" ,loadComponent:() => import("./pages/signin-page/signin-page").then((m) => m.SigninPage)
    },
    {
     path:"signup" ,loadComponent:() => import("./pages/signup-page/signup-page").then((m) => m.SignupPage)
    },
   {
     path:"forgetpassword", loadComponent: () => import("./components/forgetpassword/forgetpass/forgetpass").then((m) => m.Forgetpass)
   },
   {
     path:"verifycode", loadComponent: () => import("./components/verifypassword/verifypass/verifypass").then((m) => m.Verifypass)
   },
   {
     path:"resetpassword", loadComponent: () => import("./components/reset password/resetpass/resetpass").then((m) => m.Resetpass)
   },

];