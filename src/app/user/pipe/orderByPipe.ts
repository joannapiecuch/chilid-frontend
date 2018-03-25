import {Pipe, PipeTransform} from '@angular/core';
import {CommentInterface} from '../model/comment.interface';

interface OrderElement {
  creationDate: Date;
}

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<CommentInterface>, args?: any): Array<CommentInterface> {
    return value.sort((a: CommentInterface, b: CommentInterface) => {
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
  }
}
