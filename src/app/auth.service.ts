import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable , BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _HttpClient:HttpClient)
    {
      if(localStorage.getItem('userToken'))
      {
        this.saveUserDate()
      }
    }

  userData=new BehaviorSubject(null);

  saveUserDate()
  {
    let encodedToken=JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:any =jwtDecode(encodedToken);
    this.userData.next(decodedToken)
    console.log(this.userData);
    
  }

  signUp(formData:object):Observable<any>
  {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',formData)
  }

  
  signIn(formData:object):Observable<any>
  {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',formData)
  }

  signOut()
  {
    localStorage.removeItem('userToken');
    this.userData.next(null)
  }
}
