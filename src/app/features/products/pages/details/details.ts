import { Component, inject, OnInit } from '@angular/core';
import { ProductsServices } from '../../services/products.services';
import { ActivatedRoute } from '@angular/router';
import { Header } from "../../../../shared/components/header/header";
import { LoadingSpinner } from "../../../../shared/components/loading-spinner/loading-spinner";
import { Data } from '../../interfaces/specificproduct.interface';

@Component({
  selector: 'app-details',
  imports: [Header, LoadingSpinner],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details implements OnInit
{
  // service injection
   private readonly productservice = inject(ProductsServices);
  //  gives me info about current active route . 
   private readonly activateroute = inject(ActivatedRoute);

  // variables
    specificprod!:Data; 
    productid!:string;
// constructor --> works automatically when component created 
  constructor()
 {
   this.productid = this.activateroute.snapshot.paramMap.get("productid") as string ;
 }
  ngOnInit(): void 
  {
    this.DisplaySpecificProduct(); 
  }


  DisplaySpecificProduct()
  {
     this.productservice.DisplaySpecificProduct(this.productid).subscribe(
      {
          next:(response) => 
          {
            this.specificprod = response.data ; 
          }
      }
     )
  }
}
