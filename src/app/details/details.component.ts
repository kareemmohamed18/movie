import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor( private _MoviesService:MoviesService ,private _ActivatedRoute:ActivatedRoute ) { }

  imgPrefix:string='https://image.tmdb.org/t/p/w500'
  allDetails:any;
  id:number=0
  mediaType:string=''
  flag:boolean=false
  
  ngOnInit(): void {


    this.id=this._ActivatedRoute.snapshot.params['id'];
    this.mediaType=this._ActivatedRoute.snapshot.params['mediaType'];

    this._MoviesService.getDetails(this.id,this.mediaType).subscribe((response)=>
    {
      
      this.allDetails=response
    })
  }

  seeMore()
  {
    if(this.flag==false)
    {
      this.flag=true
    }
    else
    {
      this.flag=false
    }
  }

}
