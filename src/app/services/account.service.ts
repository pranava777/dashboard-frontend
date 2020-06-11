import { Injectable } from '@angular/core';

import {User} from "../models/user";

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  constructor(public http: HttpClient) { }

  //function for backend call for manager SIGNUP, check whether user already exists
  // in backend method and signup, if this is new user

  createAccount(user:User){
    
    return this.http.post(environment.API_URL+'/account/register',user);
  }
}
