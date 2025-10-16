import { Component, inject, OnInit } from '@angular/core';
import { CartServices } from '../../services/cart.services';
import { CartData, GetCart } from '../../interfaces/GetCart.interface';
import { RouterLink } from '@angular/router';
import { LoadingSpinner } from "../../../../shared/components/loading-spinner/loading-spinner";
import { CurrencyPipe } from '@angular/common';
import { Products, updatecartData } from '../../interfaces/UpdateCart.interface';
import { DeleteCart } from '../../interfaces/DeleteCart.interface';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../../Wishlist/services/wishlist-service';

@Component({
  selector: 'app-cart-page' ,
  imports: [RouterLink, LoadingSpinner,CurrencyPipe],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css'
})
export class CartPage implements OnInit
{   
  // service injection 
   private readonly cartservice = inject(CartServices);
   private readonly toastr = inject(ToastrService);
   private readonly wishlist = inject(WishlistService) ;
    // variables
    cartdata!:updatecartData;  
    cartid!:string ;
    totalcartitems!:number ;
    totalcartprice!:number;
    isloading = false ;
   Addedtowishlist: { [productId: string]: boolean } = {}; 
    
   ngOnInit(): void {
     this.GetCart();
   }
   GetCart()
   {
      this.cartservice.GetCart().subscribe(
        {
          next:(response:GetCart) => 
            {
               this.cartdata = response.data ;
               this.cartid = response.cartId;
               this.totalcartitems = response.numOfCartItems;
               this.totalcartprice = response.data.totalCartPrice ; 
            }
        }
      )
   }
   PutCart(product:Products,action:string)
   {    
        this.isloading =true ; 
     product.count = action === 'increment'?   ++product.count : --product.count ;

     this.cartservice.UpdateCart(product.product._id,product.count).subscribe(
      {
        next:(response) =>
           {  this.isloading = false ;
              this.cartdata = response.data ;
              this.totalcartprice = response.data.totalCartPrice ; 
              this.totalcartitems = response.numOfCartItems ;
           }
      }
     )
   }
   DeleteItemFromCart(product:Products)
   {
      this.cartservice.DeleteProduct(product.product._id).subscribe(
       {
          next:(response:DeleteCart) => {
            this.cartdata = response.data ; 
            this.GetCart() ;
        }
       }
      )
   }
   RemoveAllCart()
   {
    this.cartservice.ClearAllCart().subscribe(
      {
        next:(response:RemoveAllCart) => {
          this.toastr.success(response.message) ;
          this.GetCart() ;
          // this.cartdata = [] as any ; 
        }
      }
    );
   }
   AddTowishlist(productid:string)
   {
      this.wishlist.AddToWishlist(productid).subscribe(
        {
          next:(response) => {
            this.toastr.success(response.message) ;
             this.Addedtowishlist[productid] = !this.Addedtowishlist[productid];
          }
        }
      )
   }
}
