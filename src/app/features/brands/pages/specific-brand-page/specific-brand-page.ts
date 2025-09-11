import { Component, inject, OnInit } from '@angular/core';
import { BrandsServices } from '../../services/brands.services';
import { specificbrandData } from '../../interfaces/specificbrands.interface';
import { Header } from "../../../../shared/components/header/header";
import { ActivatedRoute } from '@angular/router';
import { LoadingSpinner } from "../../../../shared/components/loading-spinner/loading-spinner";

@Component({
  selector: 'app-specific-brand-page',
  imports: [Header, LoadingSpinner],
  templateUrl: './specific-brand-page.html',
  styleUrl: './specific-brand-page.css'
})
export class SpecificBrandPage implements OnInit
{
  // variables
   singlebrand!:specificbrandData;
    brandid!:string ;

  // service injection
   private readonly brandservice = inject(BrandsServices) ;
   private readonly activateroute = inject(ActivatedRoute);
    
   constructor()
   {
      this.brandid = this.activateroute.snapshot.paramMap.get("brandid") as string ;
   }

   ngOnInit(): void {
     this.GetSingleBrand() ;
   }

   GetSingleBrand()
   {
     this.brandservice.GetSpecificBrand(this.brandid).subscribe(
      {
        next: (response) => 
        {
           this.singlebrand = response.data ; 
        }
      }
     )
   }
}
