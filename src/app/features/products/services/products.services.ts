import { Injectable } from '@angular/core';
import { BASE_HTTP } from '../../../core/services/http/basehttp.services';
import { APIs } from '../../../core/constants/APIs';
import { specificproduct } from '../interfaces/specificproduct.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsServices extends BASE_HTTP
{
   DisplayAllProducts()
   {
     return this.Get<products>(APIs.all_products) ;
   }
   DisplaySpecificProduct(productid:string)
   {
    return this.Get<specificproduct>(`${APIs.all_products}/${productid}`);
   }
}
