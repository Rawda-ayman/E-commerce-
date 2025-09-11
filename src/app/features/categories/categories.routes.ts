import { Routes } from "@angular/router";


export const categories:Routes =
[
  {
    path:"",loadComponent:() =>import ("./pages/categories-page/categories-page").then((m) =>m.CategoriesPage )
  }
]