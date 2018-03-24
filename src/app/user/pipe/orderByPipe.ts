import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const newValue = value.sort((a: any, b: any) => {
      const date1 = new Date(a.creationDate);
      const date2 = new Date(b.creationDate);

      if (date1 > date2) {
        return 1;
      } else if (date1 < date2) {
        return -1;
      } else {
        return 0;
      }
    });

    return newValue;
  }
}
