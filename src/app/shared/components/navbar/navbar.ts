import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../../../features/auth/services/auth.services';
import { CartServices } from '../../../features/cart/services/cart.services';
import { FlowbiteService } from '../../../core/services/flowbite-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit
{
  // variables
  @Input({required:true}) isloggedin = false ;

  // service injection
  private readonly flowbiteservice = inject(FlowbiteService) ;
  private readonly auth = inject(Auth) ;
  public readonly cart = inject(CartServices); 


  ngOnInit(): void {
    this.flowbiteservice.loadFlowbite(flowbite => { flowbite.initFlowbite()})
     this.cart.GetCart().subscribe(
      {
        next:(response) => 
        {
           this.cart.cartcount = response.numOfCartItems ; 
        }
      }
     )
  }

  SignOut():void
  {
    this.auth.SignOut();
  }
}
