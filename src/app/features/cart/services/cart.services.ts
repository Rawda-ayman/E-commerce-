import { Injectable } from '@angular/core';
import { BASE_HTTP } from '../../../core/services/http/basehttp.services';
import { APIs } from '../../../core/constants/APIs';
import { GetCart } from '../interfaces/GetCart.interface';
import { UpdateCart} from '../interfaces/UpdateCart.interface';
import { DeleteCart } from '../interfaces/DeleteCart.interface';
import { getuserorders } from '../interfaces/getuserorders.interface';

@Injectable({
  providedIn: 'root'
})
export class CartServices extends BASE_HTTP
{
  //  CRUD operations

  // create cart
   AddCart(productId:string) 
   {
     return this.post<addcart>(APIs.Add_cart,
      {
       productId:productId 
     });
   }
  // retrieve (display) cart
  GetCart()
  {
     return this.Get<GetCart>(APIs.Add_cart);
  }
  // update product
  UpdateCart(productId:string,count:number) 
  {
     return this.Update<UpdateCart>(`${APIs.Add_cart}/${productId}`,{
      count : count ,
     })
    
  }
  // delete product and clear all cart
  DeleteProduct(productId:string)
  {
     return this.Delete<DeleteCart>(`${APIs.Add_cart}/${productId}`);
  }
  ClearAllCart()
  {
    return this.Delete<RemoveAllCart>(`${APIs.Add_cart}`)
  }


   Getorders(userid:string)
  {
     return this.Get<getuserorders[]>(`${APIs.userorders}${userid}`);
  }
}
