import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(
    value: any, 
    arg: any): any 
    {
    const resultPosts = [];
    for(const client of value){
      if(client.date.indexOf(arg) > -1){
         resultPosts.push(client);
      };
    };
    return resultPosts;
  }

}