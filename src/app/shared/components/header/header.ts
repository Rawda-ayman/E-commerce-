import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header 
{
   @Input({required:true})Title:string ="";
} 
