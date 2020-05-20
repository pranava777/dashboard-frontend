import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { ManagerSignupComponent } from './components/manager-signup/manager-signup.component';
import { ManagerLoginComponent } from './components/manager-login/manager-login.component';

const routes: Routes = [        //array for defining paths and relative component to be rendered
  { path: 'home', component: HomePageComponent },
  { path: 'signUp', component: ManagerSignupComponent },
  { path: 'login', component: ManagerLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],    //defined routing for URLs', which component to be rendered
  exports: [RouterModule]
})
export class AppRoutingModule { }
