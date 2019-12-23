import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  transform(items: Array<any>, filter: {[key: string]: any }): Array<any> {

    if (filter && Object.keys(filter)) {
      let filterKeys = Object.keys(filter);
      filterKeys = filterKeys.filter( v => filter[v] !== "" );
      console.log(filterKeys);
      return items.filter(item => {
        console.log(item);
        const notMatchingField = filterKeys
          .find(key => item[key] !== filter[key]);

        return !notMatchingField; // true if matches all fields
      });
    }
    return items;
  }

}
