import { Routes } from "@angular/router";


export const products:Routes =
[
  {
    path:"",loadComponent:() =>import ("./pages/products-page/products-page").then((m) =>m.ProductsPage)
  }
]