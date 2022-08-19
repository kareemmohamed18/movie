import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private _HttpClient:HttpClient  ) { }

  getTrending(mediaType:string , pageNumber:Number ):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=d6181e960aba0028e9edbd9e090fec60&page=${pageNumber}`)
  }

  getDetails(id:number , mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=d6181e960aba0028e9edbd9e090fec60&language=en-US`)
  }

search(mediaType:string , pageNumber:Number , query:string):Observable<any>
{
  return this._HttpClient.get(`https://api.themoviedb.org/3/search/${mediaType}?api_key=d6181e960aba0028e9edbd9e090fec60&language=en-US&page=${pageNumber}&include_adult=false&query=${query}`)

}

}
