import { Routes } from "@angular/router";


export const home:Routes =
[
  {
    path:"",loadComponent:() =>import ("./pages/user-page/user-page").then((m) =>m.UserPage)
  }
]