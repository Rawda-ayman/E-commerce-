import { Injectable } from '@angular/core';
import { BASE_HTTP } from '../../../core/services/http/basehttp.services';
import { APIs } from '../../../core/constants/APIs';
import { specificproduct } from '../interfaces/specificproduct.interface';
import { Params } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsServices extends BASE_HTTP
{
   DisplayAllProducts(filters?:Params)
   {
    const params = new HttpParams().appendAll(filters||{})
     return this.Get<products>(APIs.all_products,params) ;
   }
   DisplaySpecificProduct(productid:string)
   {
    return this.Get<specificproduct>(`${APIs.all_products}/${productid}`);
   }
}
