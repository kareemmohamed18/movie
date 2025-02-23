import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
Router

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor( private _AuthService:AuthService, private _Router:Router) { }

  registerForm:FormGroup=new FormGroup(
    {
      first_name:new FormControl(null ,[Validators.maxLength(10),Validators.minLength(3),Validators.required]),
      last_name:new FormControl(null ,[Validators.maxLength(10),Validators.minLength(3),Validators.required]),
      email:new FormControl(null , [Validators.required,Validators.email]),
      age:new FormControl(null ,[Validators.max(70),Validators.min(16),Validators.required]),
      password:new FormControl(null , [Validators.required, Validators.pattern(.{8,} ),
    }
  )
  errorMessage:string=''
  isLoading:boolean=false

  submitRegisterForm(registerForm:FormGroup)
  {
    this.isLoading=true
    if(registerForm.valid)
    {
      this._AuthService.signUp(registerForm.value).subscribe(
        {
          next:(response)=>
          {
            if(response.message === "success")
            {
              this.isLoading=false;
              this._Router.navigate(['/login'])                
            }
            else
            {
             alert(response.message)
              this.isLoading=false

            }
          }
        }
      )
    }    
  }

  ngOnInit(): void {
  }

}
