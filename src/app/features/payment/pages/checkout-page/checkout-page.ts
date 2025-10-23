import { Component, inject, OnInit } from '@angular/core';
import { Header } from "../../../../shared/components/header/header";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../../services/payment.service';
import { ErrorMessage } from "../../../auth/error-message/error-message";

@Component({
  selector: 'app-checkout-page',
  imports: [Header, ɵInternalFormsSharedModule, ReactiveFormsModule, ErrorMessage],
  templateUrl: './checkout-page.html',
  styleUrl: './checkout-page.css'
})
export class CheckoutPage implements OnInit
{
cardid!:string;
checkout_form!:FormGroup ;
state!:string ;
 errormessage:string |undefined;
private readonly paymentservice = inject(PaymentService) ;
private readonly formbuilder = inject(FormBuilder) ; 
private readonly activatedroute = inject(ActivatedRoute);
private readonly router = inject(Router) ;

constructor()
{
  this.cardid = this.activatedroute.snapshot.paramMap.get("cardid") as string ;
  this.checkout_form = this.formbuilder.group(
    {
        details : [null,[Validators.required,Validators.minLength(10)]],
        phone : [null,[Validators.required,Validators.pattern(/^01[2105][0-9]{8}$/)]],
        city : [null,[Validators.required]]
    }
  )
}

  ngOnInit(): void {
    this.Pay(this.state) ;
  }
  
    HandleBeforeSubmit():void
  {
    this.checkout_form.markAllAsTouched();
    this.errormessage = undefined;
  }
   Pay(status:string)
   {    
     this.HandleBeforeSubmit();
     if(this.checkout_form.valid) 
     { 
       const details = this.checkout_form.controls["details"].value ;
       const phone = this.checkout_form.controls["phone"].value ;
       const city = this.checkout_form.controls["city"].value ; 
        if(status === "cash")
       {
         this.paymentservice.CashPay({details,phone,city},this.cardid).subscribe(
          {
            next:(response):void => 
            { 
              this.router.navigateByUrl("/allorders") ; 
            }
          }
         ) ; 
       }
       else 
       {
        this.paymentservice.OnlinePay({
          shippingAddress:{details,phone,city}},this.cardid).subscribe(
          {
            next:(response):void => 
            {
              window.open(response.session.url,"_self") ;
             this.router.navigateByUrl(`${enviroment.appurl}`+"allorders");
            }
          }
        ) ;
       }
     }  
   }
}
