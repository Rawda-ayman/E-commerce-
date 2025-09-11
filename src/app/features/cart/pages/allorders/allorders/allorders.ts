import { Component, inject, OnInit } from '@angular/core';
import { CartServices } from '../../../services/cart.services';
import { getuserorders } from '../../../interfaces/getuserorders.interface';
import { CurrencyPipe, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-allorders',
  imports: [CurrencyPipe,DatePipe,NgFor,NgClass,NgIf], 
  templateUrl: './allorders.html',
  styleUrl: './allorders.css'
})
export class Allorders implements OnInit
{
  userorder!:getuserorders[]; 
  private readonly cartservice = inject(CartServices) ;
   
  ngOnInit(): void 
  {
    this.getallorders() ; 
  }

  getuserid()
  {
    return localStorage.getItem("userId") as string ;
  }
  getallorders() 
  {
    this.cartservice.Getorders(this.getuserid()).subscribe(
      {
        next:(response) => 
        {   
          this.userorder = response;
        }
      }
    )
  }
}
