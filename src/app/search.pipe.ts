import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(trendingItems:any[],term:string):any[]{
    return trendingItems.filter((item)=>item.name.toLowerCase().includes(term.toLowerCase()))
  }

}
