import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import{ provideAnimations} from'@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { tokenInterceptor } from './core/interceptors/token-interceptor';
import { errorsInterceptor } from './core/interceptors/errors-interceptor';
import { loadingInterceptor } from './core/interceptors/loading-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,withHashLocation()), provideClientHydration(withEventReplay()),

    // Lw hat3mly deployment 3ala vercel hatsht8li CSR keda msh SSR 
    // f lw CSR lazm tzwdy de =>>
    // el browser keda hy3ml ignore l ay 7aga ba3d el hash # y yb3t request daymn l 
    // index.html

    // withHashLocation() [ 3aml ignore l /home ]
   // http://localhost:4200/ 

    // lw 3awza t3mli save all files just press [ ctrl + k + s  ]
    provideHttpClient(withFetch(),withInterceptors([tokenInterceptor,errorsInterceptor,loadingInterceptor])), 
    provideAnimations(),
    provideToastr()
    // importProvidersFrom(BrowserAnimationsModule),
  ]
};

