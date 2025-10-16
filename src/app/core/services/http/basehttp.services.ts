import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Params } from "@angular/router";
import { catchError, of, throwError } from "rxjs";
import { Header } from './../../../shared/components/header/header';

@Injectable(
    {
        providedIn:"root",
    }
)
export abstract class BASE_HTTP
{
   protected readonly http = inject(HttpClient);
   
  protected post<T>(url:string,data:{},headers?:{})
   {
    // postبقدر اهندل اي ايرور راجع من ال
     return this.http.post<T>(url,data,{
        headers:headers,
     }).pipe(
        catchError( (error) => 
            {
              // return of(error) ;
               return throwError(() => error ); 
            }
        )
     );
   } 
                                     // headers?:{}
  protected Get<T>(url:string,filters?:Params)
   {
     return this.http.get<T>(url,{
      params:filters,
      // headers:header
}).pipe(
      catchError((error) => 
      {
        return throwError(() => error);
      }
      )
    )
   }  
  //         put
  protected Update<T>(url:string,data:{},headers?:{})
   {
     return this.http.put<T>(url,data,{
      headers:headers
    }).pipe(
      catchError((error) => 
      {
        return throwError(() => error);
      }
      )
    );
   }
  protected Delete<T>(url:string,headers?:{})
   {
     return this.http.delete<T>(url,{
      headers:headers
    }).pipe(
      catchError((error) => 
      {
        return throwError(() =>  error );
      }
      )
    );
   }
}