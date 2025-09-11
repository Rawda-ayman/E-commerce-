import { Routes } from "@angular/router";

export const RESETPASSWORD:Routes = [

    {
        path:"",loadComponent:() => import("./resetpass/resetpass").then((m) => m.Resetpass)
    }
]