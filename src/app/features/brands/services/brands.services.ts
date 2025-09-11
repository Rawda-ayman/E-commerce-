import { Injectable } from '@angular/core';
import { BASE_HTTP } from '../../../core/services/http/basehttp.services';
import { APIs } from '../../../core/constants/APIs';
import { AllbrandsInterface } from '../interfaces/allbrands.interface';
import { SpecificbrandsInterface } from './../interfaces/specificbrands.interface';

@Injectable({
  providedIn: 'root'
})
export class BrandsServices extends BASE_HTTP
{
   
  GetAllBrands()
  {
    return this.Get<AllbrandsInterface>(APIs.brands) ;
  } 
  GetSpecificBrand(brandid:string)
  {
    return this.Get<SpecificbrandsInterface>(`${APIs.brands}/${brandid}`) ; 
  }
}
