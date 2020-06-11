

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule,HttpRequest } from '@angular/common/http';
import {User} from "../models/user";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(public http: HttpClient) { }

  //function for backend call for manager login, check credentials in backend method and validate it
  public logIn(user: User){

    return this.http.post(environment.API_URL+"/account/login", user);
  }

}
