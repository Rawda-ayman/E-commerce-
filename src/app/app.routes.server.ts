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
   path:"wishlist",
    renderMode: RenderMode.Client, 
  },
  // aflt el auto save 34an el laptob myb2ash 3aleh da8t kbeer m3 kol 
// update hy3ml rebuild ll angular application tany

  // keda 34an el application kolo yb2a CSR
  {
    path: '**',
    renderMode: RenderMode.Client,
  }
];
