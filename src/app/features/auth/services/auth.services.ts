import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RegisterInterface } from '../interfaces/register.interface';
import { loginuserInterface } from '../interfaces/loginuser.interface';
import { APIs } from '../../../core/constants/APIs';
import { BASE_HTTP } from '../../../core/services/http/basehttp.services';
import { Router } from '@angular/router';
import { ForgetPassword } from '../interfaces/forgetpass.interface';
import { verifypassword } from '../interfaces/verifypass.interface';
import { resetpassword } from '../interfaces/resetpass.interface';


@Injectable({
  providedIn: 'root'
})
export class Auth extends BASE_HTTP
{
 
  private readonly router = inject(Router) ;

  userregister(userdata:{})                                  
  {                                             
    // return this.http.post<RegisterInterface>(APIs.register_api,userdata); 
    return this.post<RegisterInterface>(APIs.register_api,userdata);
  }
  userlogin(user:{})
  {
    // return this.http.post<loginuserInterface>(APIs.login_api,user);
    return this.post<loginuserInterface>(APIs.login_api,user);
  }
    SignOut():void
  {
     localStorage.clear();
    this.router.navigateByUrl("/signin") ;
  }
  ForgetPassword(email:{})
  {
     return this.post<ForgetPassword>(APIs.forgetpass,{
      email:email ,
    })
  }

   verifyResetCode(resetCode:string|null) 
  { 
    return this.http.post<verifypassword>(APIs.verifypass,{resetCode});
  }

  resetPassword(email:string,newPassword: string) 
  {
    return this.Update<resetpassword>(APIs.resetpass,{email,newPassword}) ;
  }
  updatePassword(oldPassword: string, newPassword: string) 
  {
    return this.http.put(APIs.updatepass, { oldPassword, newPassword });  
  }
}
