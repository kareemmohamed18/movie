import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie';

@Pipe({
  name: 'searchMovie'
})
export class SearchMoviePipe implements PipeTransform {

  transform(moviesItem:Movie[], term:string ): Movie[] {
    return moviesItem.filter((movie)=>movie.title?.toLowerCase().includes(term.toLowerCase()))
  }

}
