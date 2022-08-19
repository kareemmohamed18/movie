import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private _AuthService:AuthService , private _ActivatedRoute:ActivatedRoute) { }


  page:number=1
  isLogin:boolean=false;
  logOut()
  {
    this._AuthService.signOut()
  }

  
  onTableDataChange(event:any)
  {
    this.page=event;
  }
  

  ngOnInit(): void {

    this.page=this._ActivatedRoute.snapshot.params['page'];


    this._AuthService.userData.subscribe(
      ()=>
      {
        if(this._AuthService.userData.getValue() !=null)
        {
          this.isLogin=true
        }
        else
        {
          this.isLogin=false;
        }
      }
    )
  }

}
