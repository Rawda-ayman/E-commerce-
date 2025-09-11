import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = 
[  
   {
    path: "details/:productid/:slug",
    renderMode: RenderMode.Server,
  },
   {
    path: "details/:productid",
    renderMode: RenderMode.Server, 
  },
   {
      path:"brands/:brandid",
      renderMode:RenderMode.Server,
  },
  {
    path:"checkout/:cardid" ,
   renderMode:RenderMode.Client,
  },
  {
    path:"allorders" , 
    renderMode:RenderMode.Client,
  },
   {
    path: "cart",
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  }
];
