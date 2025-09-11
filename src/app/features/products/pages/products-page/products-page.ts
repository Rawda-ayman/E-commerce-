import { Component, inject, OnInit } from '@angular/core';
import { ProductsServices } from '../../services/products.services';
import { Header } from "../../../../shared/components/header/header";
import { LoadingSpinner } from "../../../../shared/components/loading-spinner/loading-spinner";
import { Products } from "../../../../shared/components/products/products";
import { ProductSearchPipe } from '../../../../shared/pipes/product-search-pipe';

@Component({
  selector: 'app-products-page',
  imports: [Header, LoadingSpinner, Products, ProductSearchPipe],
templateUrl: './products-page.html',
  styleUrl: './products-page.css'
})
export class ProductsPage implements OnInit
{ 
  // service injection
   private readonly product_service = inject(ProductsServices);

   // variables
  allproducts!:productsData[] | undefined; 
  searchtext:string = "" ; 
  
 
  // Call API immediately after opening application 
  ngOnInit(): void {
    this.GetAllProducts();
  }
   GetAllProducts()
   {
     this.product_service.DisplayAllProducts().subscribe(
      {
       next:(response:products) => 
            {
              this.allproducts = response.data ;
            }
      }
     )
   }
   
}
