import { Routes } from "@angular/router";

export const FORGETPASS:Routes = [

    {
        path:"" , loadComponent: () => import("./forgetpass/forgetpass").then((m) => m.Forgetpass)
    }
]