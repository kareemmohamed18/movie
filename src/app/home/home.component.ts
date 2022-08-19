import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';
import { People } from '../people';
import { Tv } from '../tv';
import { OwlOptions } from 'ngx-owl-carousel-o';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 200,
    navText: ['Prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    

  }

  constructor( private _MoviesService:MoviesService) { }
  imgPrefix:string='https://image.tmdb.org/t/p/w500'
  trendingMovies:Movie[]=[]
  trendingTv:Tv[]=[]
  trendingPeople:People[]=[]

  ngOnInit(): void {

    this._MoviesService.getTrending('movie',1).subscribe((response)=>
    {
      this.trendingMovies=response.results.slice(0,16)
    })

    
    this._MoviesService.getTrending('tv',1).subscribe((response)=>
    {
      this.trendingTv=response.results.slice(0,16)
    })


    
    this._MoviesService.getTrending('person',1).subscribe((response)=>
    {

      for(let i=0 ; i<response.results.length ; i++)
      {
        if(response.results[i].profile_path==null)
        {
          response.results[i].profile_path="../../assets/download.png";
        }
        else
        {
          response.results[i].profile_path=this.imgPrefix+response.results[i].profile_path
        }
      }
            this.trendingPeople=response.results.slice(0,16)

    })
  }

}
