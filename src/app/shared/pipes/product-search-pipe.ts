import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(array:productsData[], searchtext:string): productsData[]
  {
    console.log(searchtext) ;
    return array.filter((product) => product.title.toLocaleLowerCase().includes(searchtext.toLocaleLowerCase())) ; 
  }

}
