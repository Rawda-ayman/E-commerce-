import { Routes } from "@angular/router";

export const wishlist_routes:Routes = [
{
    path:"",loadComponent:() =>import ("./page/wishlist-page/wishlist-page").then((m) =>m.WishlistPage)
}
]
