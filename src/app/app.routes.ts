import { Routes } from '@angular/router';
import { AuthLayout } from './core/layouts/auth-layout/auth-layout';
import { MainLayout } from './core/layouts/main-layout/main-layout';
import { Notfound } from './features/static-pages/notfound/notfound';
import { authGuard } from './core/guards/Authguard/auth-guard';
import { userGuard } from './core/guards/userguard/user-guard';

export const routes: Routes = [
    {
        path:"",component:AuthLayout, 
        canActivate:[userGuard],
        loadChildren:()=>import("./features/auth/auth.routes").then((m)=> m.Auth), title:"Authentication"
    }, 
    {
        path:"",component:MainLayout, 
        canActivate:[authGuard], 
        children:[
            {
              path:"home",loadChildren: ()=>import("./features/home/home.routes").then((m) =>m.home)
            },
            {
              path:"brands",loadChildren: ()=>import("./features/brands/brands.routes").then((m) =>m.brand)
            },
            {
              path:"brands/:brandid",loadComponent: ()=>import("./features/brands/pages/specific-brand-page/specific-brand-page").then((m) =>m.SpecificBrandPage)
            },
            {
              path:"cart",loadChildren: ()=>import("./features/cart/cart.routes").then((m)=>m.cart)
            },
            {
              path:"categories",loadChildren: ()=>import("./features/categories/categories.routes").then((m) =>m.categories)
            },
            {
              path:"products",loadChildren: ()=>import("./features/products/products.routes").then((m) =>m.products)
            },
             {
                path:"details/:productid/:slug", loadComponent:() =>import ("./features/products/pages/details/details").then((m) =>m.Details)
             },
             {
                path:"details/:productid", loadComponent:() =>import ("./features/products/pages/details/details").then((m) =>m.Details)
             },
            {
              path:"checkout/:cardid",loadComponent: ()=>import("./features/payment/pages/checkout-page/checkout-page").then((m) =>m.CheckoutPage)
            },
            {
              path:"allorders",loadComponent: ()=>import("./features/cart/pages/allorders/allorders/allorders").then((m) =>m.Allorders)
            },
        ],
         title:"Main Page"
    },
    {
        path:"**",component:Notfound,title:"Not Found page" 
    }
];
