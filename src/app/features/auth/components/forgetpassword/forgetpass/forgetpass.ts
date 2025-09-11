import { Component, inject } from '@angular/core';
import { Auth } from '../../../services/auth.services';
import { ForgetPassword } from '../../../interfaces/forgetpass.interface';
import { FormBuilder, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessage } from "../../../error-message/error-message";
import { verifypassword } from '../../../interfaces/verifypass.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgetpass',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule, ErrorMessage, RouterLink],
templateUrl: './forgetpass.html',
  styleUrl: './forgetpass.css'
})
export class Forgetpass 
{  

  forgetpass_form:FormGroup ;
  message!:string ;  
 errormessage:string|undefined ;
    private readonly authservice = inject(Auth) ;
    private readonly formbuilder = inject(FormBuilder); 
 
   constructor()
   {
     this.forgetpass_form = this.formbuilder.group(
      {
         email:[null,[Validators.required,Validators.email]],
      }
    )
   }
 
   HandleBeforeSubmit():void
  {
       this.forgetpass_form.markAllAsTouched();
       this.errormessage = undefined;
  }

  ForGetPass()
  {  
     this.HandleBeforeSubmit() ;
     if(this.forgetpass_form.valid)
     { 
      const useremail = this.forgetpass_form.controls["email"].value ; 
     this.authservice.ForgetPassword(useremail).subscribe(
      {
         next:(response:ForgetPassword) => 
         {
          localStorage.setItem("email",useremail) ;
            this.message = response.message ;
         }
      }
     )
  }
}
}
