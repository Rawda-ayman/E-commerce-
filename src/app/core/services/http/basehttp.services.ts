import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Params } from "@angular/router";
import { catchError, of, throwError } from "rxjs";

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
              return throwError(() => error ); 
            }
        )
     );
   }
  protected Get<T>(url:string,filters?:Params,headers?:{})
   {
     return this.http.get<T>(url,{
      params:filters,
      headers:headers
    }).pipe(
      catchError((error) => 
      {
        return throwError(() => { error });
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
        return throwError(() => { error });
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
        return throwError(() => { error });
      }
      )
    );
   }
}