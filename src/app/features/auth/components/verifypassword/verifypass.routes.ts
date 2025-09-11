import { Routes } from "@angular/router";

export const VERIFYPASS:Routes = [

{
    path:"",loadComponent:() => import("./verifypass/verifypass").then((m) => m.Verifypass)
}

]