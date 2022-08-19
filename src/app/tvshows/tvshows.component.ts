
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Tv } from '../tv';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {

  constructor( private _MoviesService:MoviesService) { }

  trendingTv:Tv[]=[]
  imgPrefix:string='https://image.tmdb.org/t/p/w500'
  term:string=''


  page:number=1;
  totalSize:number=1;
  totalPage:number=0;

  
  getPaginatedTvData(pageNumber:Number)
  {
    this._MoviesService.getTrending('tv',pageNumber).subscribe((response)=>
    {
      this.trendingTv=response.results
      this.totalPage=response.total_pages
    })
  
  }


  
  checkInput()
  {
    if(this.term=='')
    {
      this.getPaginatedTvData(1)
    }
  }



  onTableDataChange(event:any)
  {
    this.page=event;
    this.getPaginatedTvData(this.page)
    this.searchTv(this.page)
  }


  searchTv(pagenumber:number)
  {
    this._MoviesService.search('tv',pagenumber,this.term).subscribe((response)=>
    {
      this.trendingTv=response.results
      this.totalPage=response.total_pages
    })
  }

  ngOnInit(): void {

    this.getPaginatedTvData(1)
  }

}
