import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any, gender:string): unknown {
      if(value.gender == 'male'){
        return `Mr. ${value.name}`;
      } else if(value.gender == 'female'){
        return `Mrs. ${value.name}`;

      }
    return value.name;
  }

}
