import { Routes } from "@angular/router";


export const cart:Routes =
[
  {
    path:"",loadComponent:() =>import ("./pages/cart-page/cart-page").then((m) =>m.CartPage )
  },
]