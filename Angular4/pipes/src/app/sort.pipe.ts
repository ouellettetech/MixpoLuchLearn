import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): any {
    return value.sort((item1, item2) => {
      if (item1[propName] < item2[propName]) {
        return -1;
      }
      if (item1[propName] > item2[propName]) {
        return 1;
      }
      return 0;
    });
  }
}
