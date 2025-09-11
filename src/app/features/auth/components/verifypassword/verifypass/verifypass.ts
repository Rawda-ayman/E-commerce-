import { Component, inject, OnInit } from '@angular/core';
import { Auth } from '../../../services/auth.services';
import { ErrorMessage } from "../../../error-message/error-message";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { verifypassword } from '../../../interfaces/verifypass.interface';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verifypass',
  imports: [ErrorMessage, ɵInternalFormsSharedModule,ReactiveFormsModule],
templateUrl: './verifypass.html',
  styleUrl: './verifypass.css'
})
export class Verifypass implements OnInit
{

  verifypass_form!:FormGroup ;
  message!:string ;  
 errormessage:string|undefined ;
private readonly authservice = inject(Auth) ;
 private readonly formbuilder = inject(FormBuilder); 
  private readonly router = inject(Router) ;

 constructor()
 {
   this.verifypass_form = this.formbuilder.group(
      {
         resetCode:["",[Validators.required]], 
      })
 }
  ngOnInit(): void {
    this.VerifyCode() ;
  }

   HandleBeforeSubmit():void
  {
       this.verifypass_form.markAllAsTouched();
       this.errormessage = undefined;
  }
  VerifyCode()
  {  
    this.HandleBeforeSubmit() ;

       if(this.verifypass_form.valid)
         {   
           const resetCode = this.verifypass_form.controls["resetCode"].value; 

           this.authservice.verifyResetCode(resetCode).subscribe(
            {
                next:(response:verifypassword ) => 
                {
                   this.message = response.status ; 
                   this.router.navigateByUrl("/resetpassword") ;
                }
            }
          );
      }

  }
}
