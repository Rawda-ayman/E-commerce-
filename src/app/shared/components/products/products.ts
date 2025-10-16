import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartServices } from '../../../features/cart/services/cart.services';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../../features/Wishlist/services/wishlist-service';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products 
{
  // variables
  @Input({required:true}) product!:productsData;
  isloading=false ;
  addedtowishlist = false ;
  // service injection
    private readonly cartservice = inject(CartServices); 
    private readonly wishlistservice = inject(WishlistService);
    private readonly toastr = inject(ToastrService);
    
  AddProduct(product_id:string)
  {
    this.isloading = true ;
      this.cartservice.AddCart(product_id).subscribe(
        {
          next:(response:addcart) => 
            {
              this.cartservice.cartcount = response.numOfCartItems;
              this.toastr.success(response.message);
              this.isloading = false ;
            }
        }
      );
  }
  AddProductToWishlist(productid:string)
  {
    this.wishlistservice.AddToWishlist(productid).subscribe(
      {
        next:(response) => 
        {
          console.log(response) ;
          this.toastr.success(response.message) ;
          this.addedtowishlist = true ;
        }
      }
    )
  }
  // ToggleHeartColor()
  // {
  //   this.addedtowishlist = !this.addedtowishlist ;
  // }
}
