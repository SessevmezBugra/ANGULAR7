import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : null;
    console.log(filterText);
    console.log(value);
    return filterText ? value.filter((p:Product)=>{return p.name.toLocaleLowerCase().indexOf(filterText)!==-1}) : value;
  }

}
