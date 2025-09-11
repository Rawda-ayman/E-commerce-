import { Component, inject, OnInit, PLATFORM_ID, signal} from '@angular/core';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './core/services/flowbite-service';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { timer } from 'rxjs';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgxSpinnerModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit
{
  protected readonly title = signal('e-commerce');
    constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(() => 
      {
         initFlowbite();
      });
      
     
}
}
