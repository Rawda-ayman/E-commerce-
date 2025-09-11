import { Routes } from "@angular/router";

export const PAYMENT:Routes = [

{
    path:"" , loadComponent:() =>import ("./pages/checkout-page/checkout-page").then((m) =>m.CheckoutPage)
}
    
]