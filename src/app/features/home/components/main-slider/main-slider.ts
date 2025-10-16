import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-main-slider',
  imports: [CarouselModule],
  templateUrl: './main-slider.html',
  styleUrl: './main-slider.css'
})
export class MainSlider 
{
// options of owl carousel . 
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
    items: 1,
    nav:true
  }

}
