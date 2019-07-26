import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cate'
})
export class CatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
