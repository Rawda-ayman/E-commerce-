import { Component, inject, OnInit } from '@angular/core';
import { ProductsServices } from '../../../products/services/products.services';
import { Header } from "../../../../shared/components/header/header";
import { Products } from "../../../../shared/components/products/products";
import { LoadingSpinner } from "../../../../shared/components/loading-spinner/loading-spinner";

@Component({
  selector: 'app-popular-products',
  imports: [Header, Products, LoadingSpinner],
  templateUrl: './popular-products.html',
  styleUrl: './popular-products.css'
})
export class PopularProducts implements OnInit
{  
  // service injection
  private readonly productsservice = inject(ProductsServices);

  // variables 
   popularproducts!:productsData[];
  ngOnInit(): void 
  {
    this.DisplayPopularProducts();
  }

  DisplayPopularProducts()
  {
     this.productsservice.DisplayAllProducts().subscribe(
      {
        next:(response:products) => 
        {
           this.popularproducts = response.data ;
        }
      }
     )
  }
}
