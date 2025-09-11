import { Component, inject, OnInit } from '@angular/core';
import { Auth } from '../../../services/auth.services';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { resetpassword } from '../../../interfaces/resetpass.interface';
import { ErrorMessage } from "../../../error-message/error-message";
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-resetpass',
  imports: [ReactiveFormsModule, ErrorMessage],
  templateUrl: './resetpass.html',
  styleUrl: './resetpass.css'
})
export class Resetpass implements OnInit
{
ShowPassword() {
throw new Error('Method not implemented.');
}

// variables
  resetpass_form!:FormGroup ;
  message!:string ;  
 errormessage:string|undefined ;

//  service injection
   private readonly authservice = inject(Auth) ;
  private readonly formbuilder = inject(FormBuilder); 
  private readonly router = inject(Router) ;


   constructor()
   {
     this.resetpass_form = this.formbuilder.group(
      {
        email : ["",[Validators.required]],
        newPassword : ["",[Validators.required]]
      }
     )
   }

   ngOnInit(): void {
     this.ResetPassword() ;
   }

    HandleBeforeSubmit():void
  {
    this.resetpass_form.markAllAsTouched();
    this.errormessage = undefined;
  }

   ResetPassword()
   { 
    this.HandleBeforeSubmit() ;
    if(this.resetpass_form.valid)
      { 
        const email = this.resetpass_form.controls["email"].value ;
        const newPassword = this.resetpass_form.controls["newPassword"].value ;
        this.authservice.resetPassword(email,newPassword).subscribe(
          {
            next:(response:resetpassword) => 
            {
               localStorage.setItem("token",response.token) ; 
               this.router.navigateByUrl("/home") ;
            }
          }
        )

    }
   }

}
