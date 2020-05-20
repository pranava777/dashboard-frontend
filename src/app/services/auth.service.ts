

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule,HttpRequest } from '@angular/common/http';
import {User} from "../models/user";
import {AppComponent} from "../app.component";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(public http: HttpClient) { }

  //function for backend call for manager login, check credentials in backend method and validate it
  public logIn(user: User){

    return this.http.post(AppComponent.API_URL+"/account/login", user);
  }

}
