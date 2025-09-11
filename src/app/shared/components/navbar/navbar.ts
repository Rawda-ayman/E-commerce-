import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../../../features/auth/services/auth.services';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar 
{
  // variables
  @Input() isloggedin = false ;

  // service injection
  private readonly auth = inject(Auth) ;

  SignOut():void
  {
    this.auth.SignOut();
  }
}
