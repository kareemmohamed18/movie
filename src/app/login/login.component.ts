import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _Router:Router , private _AuthService:AuthService,private _ToastrService:ToastrService) { }

  loginForm:FormGroup=new FormGroup(
    {
      email:new FormControl(null , [Validators.required,Validators.email]),
      password:new FormControl(null , [Validators.required, Validators.pattern(.{8,} ),
    }
  )
  isLoading:boolean=false
  errorMessage:string=''

  submitLoginForm(loginForm:FormGroup)
  {
    this.isLoading=true

    if(loginForm.valid)
    {
      this._AuthService.signIn(loginForm.value).subscribe(
        {
          next:(response)=>
          {
            if(response.message === "success")
            {
              this._ToastrService.success('Hello world!', ' Login Succuffule!');
              this.isLoading=false;
              localStorage.setItem('userToken', response.token);
              this._AuthService.saveUserDate();
              this._Router.navigate(['/home'])
            }
            else
            {
              this.isLoading=false;
              this._ToastrService.error( response.message, ' Login error!');
            }
          }
        }
      )
    }
  }
  ngOnInit(): void {
  }

}
