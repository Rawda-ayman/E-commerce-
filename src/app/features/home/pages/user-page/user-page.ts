import { Component } from '@angular/core';
import { MainSlider } from "../../components/main-slider/main-slider";
import { CategoriesSlider } from "../../components/categories-slider/categories-slider";
import { PopularProducts } from "../../components/popular-products/popular-products";

@Component({
  selector: 'app-user-page',
  imports: [MainSlider, CategoriesSlider, PopularProducts],
  templateUrl: './user-page.html',
  styleUrl: './user-page.css'
})
export class UserPage {

}
