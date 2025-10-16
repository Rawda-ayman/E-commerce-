import { Component, inject, OnInit } from '@angular/core';
import { WishlistService } from '../../services/wishlist-service';
import { ToastrService } from 'ngx-toastr';
import { LoadingSpinner } from "../../../../shared/components/loading-spinner/loading-spinner";
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wishlist-page',
  imports: [LoadingSpinner,CurrencyPipe,RouterLink],
  templateUrl: './wishlist-page.html',
  styleUrl: './wishlist-page.css'
})
export class WishlistPage implements OnInit
{
wishlistdata!:wishlist_product[] ;
wishlistcount!:number ;
private readonly wishlistservice = inject(WishlistService); 
private readonly toastr = inject(ToastrService) ;

  ngOnInit(): void {
    this.GetProductWishlist() ;
  }
  GetProductWishlist()
  {
    this.wishlistservice.GetWishlist().subscribe(
      {
        next:(response) => 
        { 
          this.wishlistcount = response.count ;
          this.wishlistdata = response.data ;
        }
      }
    )
  }
  DeleteProductFromWishlist(productid:string)
  {
    return this.wishlistservice.DeleteFromWishlist(productid).subscribe(
      {
        next:(response) => 
        {
             this.toastr.success(response.message) ;
             this.GetProductWishlist() ;
        }
      }
    )
  }
}
