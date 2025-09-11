import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ErrorMessage } from "../../error-message/error-message";
import { Auth } from '../../services/auth.services';
import { HttpErrorResponse } from '@angular/common/http';
import { loginuserInterface } from '../../interfaces/loginuser.interface';
import { interval } from 'rxjs';

@Component({
  selector: 'app-signin-page',
  imports: [RouterLink, ɵInternalFormsSharedModule, ReactiveFormsModule, ErrorMessage],
templateUrl: './signin-page.html',
  styleUrl: './signin-page.css'
})
export class SigninPage 
{
  // variables
  successmessage:string|undefined;
  errormessage:string|undefined;
  loginform!:FormGroup;
  IsShowPassword=false;
  IsLoading = false ;
  // service injection
   private readonly auth = inject(Auth);
   private readonly formbuilder = inject(FormBuilder); 
   private readonly router = inject(Router);
   
  // reactive form    syntax --> xxxxxxx 
  //  loginform = new FormGroup(
  //   {
  //     email: new FormControl(null,[Validators.required,Validators.email]),
  //     password:new FormControl(null,[Validators.required])
  //   }
  //  )

  // the best place to define form is in the constructor .
   constructor()
   {
    this.loginform = this.formbuilder.group(
      {
         email:[null,[Validators.required,Validators.email]],
         password:[null,[Validators.required]]
      }
    )
   }

   HandleBeforLogin():void
   {
     this.loginform.markAllAsTouched();
     this.errormessage = undefined ;
     this.IsLoading = true;
   }
     OnLogin():void
     {
       this.HandleBeforLogin();
       if(this.loginform.valid)
       {
        const loggeduser = this.loginform.value;
       this.auth.userlogin(loggeduser).subscribe(
        {
          next:(response:loginuserInterface) => 
            {
              this.HandleSuccessResponse(response);
            },
           error:(err:HttpErrorResponse) => 
            {
              this.HandleErrorResponse(err);
            }
        }
       )
       }
     }
     HandleSuccessResponse(response:loginuserInterface):void
     {
       this.successmessage = response.message;
       localStorage.setItem("token",response.token);
       this.loginform.reset();
       this.IsLoading = false;
      //  use interval or timer . 
       interval(2000).subscribe(
           () => {
            this.router.navigateByUrl("/home");
          }
       )
     }
     HandleErrorResponse(err:HttpErrorResponse):void
     {
         this.errormessage = err.error.message;
         this.IsLoading =false ;
     }

     ShowPassword()
     {
        this.IsShowPassword = !this.IsShowPassword ;
     }
}

