import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seeMore'
})
export class SeeMorePipe implements PipeTransform {

  transform(overView:any , limit:number):string {
    return overView.split(' ').slice(0,limit).join(' ');
  }

}
