import { Injectable } from '@angular/core';
import { BASE_HTTP } from '../../../core/services/http/basehttp.services';
import { APIs } from '../../../core/constants/APIs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService extends BASE_HTTP
{
   
  AddToWishlist(productid:string)
  {
    return this.post<wishlist_interface>(APIs.wishlist,{productId:productid},{token:localStorage.getItem("token")});
  }
  GetWishlist()
  {
    // I didn't sent token bec. i sent it in token interceptor.
    return this.Get<get_wishlist_interface>(APIs.wishlist) ;
  }
  DeleteFromWishlist(productid:string)
  {
     // I didn't sent token bec. i sent it in token interceptor.
    return this.Delete<deletewishlist>(APIs.deletefromwishlist+`${productid}`,{token:localStorage.getItem("token")}) ;
  }
}
