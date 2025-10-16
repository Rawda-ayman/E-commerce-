import { Component, inject, OnInit } from '@angular/core';
import { ProductsServices } from '../../services/products.services';
import { ActivatedRoute } from '@angular/router';
import { Header } from "../../../../shared/components/header/header";
import { LoadingSpinner } from "../../../../shared/components/loading-spinner/loading-spinner";
import { Data } from '../../interfaces/specificproduct.interface';
import { Products } from "../../../../shared/components/products/products";
import { PopularProducts } from "../../../home/components/popular-products/popular-products";
import { CartServices } from '../../../cart/services/cart.services';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../../Wishlist/services/wishlist-service';

@Component({
  selector: 'app-details',
  imports: [Header, LoadingSpinner, Products, PopularProducts],
templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details implements OnInit
{
  // service injection
   private readonly productservice = inject(ProductsServices);
   private readonly cartservice = inject(CartServices) ;
   private readonly wishlistservice = inject(WishlistService) ;
  //  gives me info about current active route . 
   private readonly activateroute = inject(ActivatedRoute);
   private readonly toastr = inject(ToastrService);



  // variables
    specificprod!:Data; 
    productid!:string;
    addedtowishlist=false ;
// constructor --> works automatically when component created 
  constructor()
 {
    this.activateroute.paramMap.subscribe(
      {
        next:(response) => {
          this.productid = response.get("productid")as string ;
          this.DisplaySpecificProduct() ;
          
        }
      }
    ) ;
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
  AddToCart(productid:string)
  {
    this.cartservice.AddCart(productid).subscribe(
      {
        next:(response) => {
          this.toastr.success(response.message) ;
        }
      }
    )
  }
  AddToWishList(productid:string)
  {
    this.wishlistservice.AddToWishlist(productid).subscribe(
      {
        next:(response) => {
          this.toastr.success(response.message) ;
          this.addedtowishlist = true ;
        }
      }
    )
  }
}
