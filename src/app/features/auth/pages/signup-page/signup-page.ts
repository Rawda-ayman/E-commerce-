import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators,ValidatorFn} from '@angular/forms';
import { ErrorMessage } from "../../error-message/error-message";
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth.services';
import { HttpErrorResponse } from '@angular/common/http';
import { RegisterInterface } from '../../interfaces/register.interface';
import { interval, take } from 'rxjs';


@Component({
  selector: 'app-signup-page',
  imports: [ReactiveFormsModule, ErrorMessage,RouterLink],
  templateUrl: './signup-page.html',
  styleUrl: './signup-page.css'
})
export class SignupPage 
{
  // variables
  errormessage:string|undefined ;
  successmessage:string|undefined ;
  isLoading = false;
  timer:number = 5;
  isShowPassword:boolean =false ;

  // service injection
   private readonly auth = inject(Auth);
   private readonly router = inject(Router);

  // formgroup is an object. I took an instance from it. 
  register_form = new FormGroup(
    {
    // in first argument -->  او لا default value ممكن احط 
    // null و لو محطش يبقي اكتب مكانها 
    // in second argument --> i can send one validator or array of validators . 
    name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z][0-9]{8,}$/)]),
    rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z][0-9]{8,}$/)]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[2105][0-9]{8}$/)])
  },
 { validators: [this.passwordmissmatch as ValidatorFn] } 
);

  // Custom validation....
  //   عشان اقارنهم ببعض repasswordدي عشان اجيب قيمه الباسورد و قيمه الfunction انا عملت ال
  //   معني كده ان الاتنين مش بيساوا بعض missmatch:trueيعني مفيش مشكله و لكن لو الnull و اشوف لو الاتنين زي بعض يبقي كده
  passwordmissmatch(form:FormGroup)
  {
    const password = form.get("password")?.value;
    const rePassword = form.get("rePassword")?.value;
    return password === rePassword ? null : { missmatch:true };
  }

  HandleBeforeSubmit():void
  {
       this.register_form.markAllAsTouched();
       this.errormessage = undefined;
       this.isLoading = true ;
  }
  //   للباك اند dataابعت الsubmit لما اعمل 
  OnSubmit()
  {
    this.HandleBeforeSubmit();
     if(this.register_form.valid)
    {
      const userdata = this.register_form.value;
      this.auth.userregister(userdata).subscribe( 
        { next:response => 
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
  HandleSuccessResponse(response:RegisterInterface):void
  {
       this.successmessage = response.message; 
       localStorage.setItem("user",response.user.email) ; 
       this.register_form.reset();
       this.isLoading = false ;
       interval(1000).pipe(take(5)).subscribe(
       () => {
          this.timer--;
          if(this.timer === 0)
          {
            this.router.navigateByUrl("/signin");
          }
        }
       )
  }

  HandleErrorResponse(err:HttpErrorResponse):void
  {
    this.errormessage = err.error.message;
    this.isLoading = false ;
  }
  
  togglepassword()
  {
    this.isShowPassword = !this.isShowPassword ;
  }

}



    // this.register_form.value inputالمكتوبه جوا الdataال
    // this.register_form.touched  ولا لا inputدخلت جوا ال
    // this.register_form.untouched  ولا لا input مدخلتش جوا ال
    // this.register_form.controls  نفسها inputsال
    // this.register_form.dirty كتبت جواها ولا لا 
    // this.register_form.pristine (متكتبش جواها ولا لا) )نقيه ولا لا 
    //  this.register_form.errors  ولا لا error فيه