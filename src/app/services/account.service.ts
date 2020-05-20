import { Injectable } from '@angular/core';
import {User} from "../models/user";

import {AppComponent} from "../app.component";

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  constructor(public http: HttpClient) { }

  //function for backend call for manager SIGNUP, check whether user already exists
  // in backend method and signup, if this is new user

  createAccount(user:User){
    
    return this.http.post(AppComponent.API_URL+'/account/register',user);
  }
}
