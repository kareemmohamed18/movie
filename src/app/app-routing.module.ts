import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { PepoleComponent } from './pepole/pepole.component';
import { RegisterComponent } from './register/register.component';
import { TvshowsComponent } from './tvshows/tvshows.component';

const routes: Routes = 
[
  {path:'' , redirectTo:'home', pathMatch:'full'},
  {path:'home' ,canActivate:[AuthGuard] , component:HomeComponent},
  {path:'details/:id/:mediaType' ,canActivate:[AuthGuard] , component:DetailsComponent},
  {path:'movies' ,canActivate:[AuthGuard] , component:MoviesComponent},
  {path:'pepole' ,canActivate:[AuthGuard] , component:PepoleComponent},
  {path:'tv' ,canActivate:[AuthGuard] , component:TvshowsComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'**' , component:NotfoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
