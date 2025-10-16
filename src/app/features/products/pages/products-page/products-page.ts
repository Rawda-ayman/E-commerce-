import { Component, inject, OnInit } from '@angular/core';
import { ProductsServices } from '../../services/products.services';
import { Header } from "../../../../shared/components/header/header";
import { LoadingSpinner } from "../../../../shared/components/loading-spinner/loading-spinner";
import { Products } from "../../../../shared/components/products/products";
import { ProductSearchPipe } from '../../../../shared/pipes/product-search-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-products-page',
  imports: [Header, LoadingSpinner, Products, ProductSearchPipe , NgxPaginationModule],
templateUrl: './products-page.html',
  styleUrl: './products-page.css'
})
export class ProductsPage implements OnInit
{ 
  // service injection
   private readonly product_service = inject(ProductsServices);
   private readonly router = inject(Router);
   private readonly activatedroute = inject(ActivatedRoute);


   // variables
  allproducts!:productsData[] | undefined; 
  currentpage:number = 1 ;
  page:number = 1 ;
  totalitems:number = 1;
  itemsperpage:number = 1 ;
  searchtext:string = "" ; 
  
 
  constructor()
  {
    this.page = Number(this.activatedroute.snapshot.queryParamMap.get("page")) ;
  }
  // Call API immediately after opening application 
  ngOnInit(): void {
    this.GetAllProducts();
  }
   GetAllProducts()
   {
     this.product_service.DisplayAllProducts({page:this.page , limit:33}).subscribe(
      {
       next:(response:products) => 
            {
              this.allproducts = response.data ;
              this.currentpage = response.metadata.currentPage ; 
              this.totalitems = response.results;
              this.itemsperpage = response.metadata.limit ;
            }
      }
     )
   }

   pageChange(numberofpages:number)
   { 
      this.page = numberofpages ;
      this.router.navigate([],{
        queryParams:{
          page : this.page,
        }
      })
      this.allproducts = undefined ; 
      this.GetAllProducts() ;
   }
   
}
