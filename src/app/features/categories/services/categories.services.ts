import { Injectable } from '@angular/core';
import { BASE_HTTP } from '../../../core/services/http/basehttp.services';
import { APIs } from '../../../core/constants/APIs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesServices extends BASE_HTTP
{   
  GetAllCategories()
  {
    return this.Get<allcategories>(APIs.all_categories);
  }
  GetSpecificCategory(category_id:string)
  {
    return this.Get<specificcategory>(`${APIs.specific_category}/${category_id}`); 
  }
}
