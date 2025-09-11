import { Component, inject, OnInit } from '@angular/core';
import { CategoriesServices } from '../../../categories/services/categories.services';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-categories-slider',
  imports: [CarouselModule],
  templateUrl: './categories-slider.html',
  styleUrl: './categories-slider.css'
})
export class CategoriesSlider implements OnInit
{
  customOptions: OwlOptions = 
   {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplaySpeed: 700,
    navSpeed: 1000,
    navText: ['', ''],
    items: 7,
    nav:true
  }



  //  service injection 
  private readonly categoryservice = inject(CategoriesServices);

  // variables 
  allcategories!:categorydata[]
   
  ngOnInit(): void 
  {
    this.DisplayCategories();
  }
 
  DisplayCategories()
  {
    this.categoryservice.GetAllCategories().subscribe(
      {
        next:(response:allcategories) => 
          {
          this.allcategories = response.data;
        }
      }
    )
  } 
}
