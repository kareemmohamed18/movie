import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { People } from '../people';

@Component({
  selector: 'app-pepole',
  templateUrl: './pepole.component.html',
  styleUrls: ['./pepole.component.scss']
})
export class PepoleComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }

  imgPrefix:string='https://image.tmdb.org/t/p/w500'
  term:string=''
  trendingPeople:People[]=[]


  
  page:number=1;
  totalSize:number=1;
  totalPage:number=0;



  
  getPaginatedPeopleData(pageNumber:Number)
  {
    this._MoviesService.getTrending('person',pageNumber).subscribe((response)=>
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

      this.trendingPeople=response.results
      this.totalPage=response.total_pages
    })
  
  }

  

  
  onTableDataChange(event:any)
  {
    this.page=event;
    this.getPaginatedPeopleData(this.page)
    this.searchPeople(this.page)
  }

  checkInput()
  {
    if(this.term=='')
    {
      this.getPaginatedPeopleData(1)
    }
  }

  
  searchPeople(pagenumber:number)
  {
    this._MoviesService.search('person',pagenumber,this.term).subscribe((response)=>
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

      this.trendingPeople=response.results
      this.totalPage=response.total_pages
    })
    
    
  }


  ngOnInit(): void {

    this.getPaginatedPeopleData(1)
  }

}

