import { Routes } from '@angular/router';
import path from 'path';

export const brand:Routes =
[
   {
    path:"",loadComponent:()=>import("./pages/brand-page/brand-page").then((m)=>m.BrandPage)
   }
]
