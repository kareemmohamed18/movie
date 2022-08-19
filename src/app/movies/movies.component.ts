import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {


  page:number=1;
  totalSize:number=1;
  totalPage:number=0;

  constructor( private _MoviesService:MoviesService, private _ActivatedRoute:ActivatedRoute) { }
  trendingMovies:Movie[]=[]
  imgPrefix:string='https://image.tmdb.org/t/p/w500'
  term:string=''

  

  checkInput()
  {
    if(this.term=='')
    {
      this.getPaginatedMovieData(1)
    }
  }
  
  getPaginatedMovieData(pageNumber:Number)
  {
    this._MoviesService.getTrending('movie',pageNumber).subscribe((response)=>
    {
      this.trendingMovies=response.results
      this.totalPage=response.total_pages

    })
  
  }


  onTableDataChange(event:any)
  {
    this.page=event;
    this.getPaginatedMovieData(this.page)
    this.searchMovie(this.page)
  }
  


  searchMovie(pagenumber:number)
  {
    this._MoviesService.search('movie',pagenumber,this.term).subscribe((response)=>
    {
      this.trendingMovies=response.results
      this.totalPage=response.total_pages
    })
    
    
  }
  ngOnInit(): void {

    this.getPaginatedMovieData(1)
    
  }

}
