import { Component, inject, OnInit } from '@angular/core';
import { BrandsServices } from '../../services/brands.services';
import { AllbrandsInterface, brandsdata } from '../../interfaces/allbrands.interface';
import { Header } from "../../../../shared/components/header/header";

@Component({
  selector: 'app-brand-page',
  imports: [Header],
  templateUrl: './brand-page.html',
  styleUrl: './brand-page.css'
})
export class BrandPage implements OnInit
{
  //  variables 
   brandsdata!:brandsdata[] ; 
  // service injection
  private readonly brandsservice = inject(BrandsServices) ;

  ngOnInit(): void {
    this.GetBrands() ;
  }

  GetBrands()
  {
    this.brandsservice.GetAllBrands().subscribe(
      {
        next: (response) =>  
        {
           this.brandsdata = response.data ;  
        }
      }
    )
  } 
  
}
