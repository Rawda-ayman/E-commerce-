import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartServices } from '../../../features/cart/services/cart.services';
import { ToastrService } from 'ngx-toastr';

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

  // service injection
    private readonly cartservice = inject(CartServices);
    private readonly toastr = inject(ToastrService);
    
  AddProduct(product_id:string)
  {
    console.log(product_id);
    this.isloading = true ;
      this.cartservice.AddCart(product_id).subscribe(
        {
          next:(response:addcart) => 
            {
              console.log(response);
              this.toastr.success(response.message);
              this.isloading = false ;
            }
        }
      );
  }
}
