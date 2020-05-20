import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {User} from "../../models/user";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css'],
  encapsulation: ViewEncapsulation.None
})

//component for manager login

export class ManagerLoginComponent implements OnInit {
  user: User=new User();
  errorMessage:string;

  //creating reference variable of AuthService, Router
  constructor(private authService :AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  //function for manager login
  login(){
    //subscribing logIn() function of AuthService service

    this.authService.logIn(this.user)
      .subscribe(data=>{

        const values = Object["values"](data);
        if(values[0] == "Success") {
            this.router.navigate(['/home']);  //if login response is Success from backend,
                                              //then redirect to manager dashboard (home-page component)
        }
        },err=>{
        this.errorMessage="error :  Username or password is incorrect";
        }
      )
  }
}

