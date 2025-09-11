import { Component, inject, OnInit } from '@angular/core';
import { CategoriesServices } from '../../services/categories.services';
import { Header } from "../../../../shared/components/header/header";
import { LoadingSpinner } from "../../../../shared/components/loading-spinner/loading-spinner";

@Component({
  selector: 'app-categories-page',
  imports: [Header, LoadingSpinner],
  templateUrl: './categories-page.html',
  styleUrl: './categories-page.css'
})
export class CategoriesPage implements OnInit
{ 
  // variables 
  all_categories!:categorydata[];
  //  service injection
  private readonly categoryservice = inject(CategoriesServices);

   ngOnInit(): void 
   {
     this.DisplayAllCategories();
   }

    DisplayAllCategories():void
    {
      this.categoryservice.GetAllCategories().subscribe(
        {
          next:(response:allcategories) => 
          {
            this.all_categories = response.data ;
          },
        }
      )
    } 
}
