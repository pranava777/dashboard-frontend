import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../../models/user";
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manager-signup',
  templateUrl: './manager-signup.component.html',
  styleUrls: ['./manager-signup.component.css'],
  encapsulation: ViewEncapsulation.None
})

//component for manager signup

export class ManagerSignupComponent implements OnInit {

  user: User = new User();
  errorMessage: string;

  //creating reference variable of AccountService, Router
  constructor(public accountService: AccountService, public router: Router) {
  }

  ngOnInit(): void {
  }

  //function for manager signup
  register() {
    //subscribing createAccount() function of AccountServices

    this.accountService.createAccount(this.user).subscribe(data => {
        const values = Object["values"](data);
        
        if(values[0] == "Success") {
          this.router.navigate(['/login']); //if signup response is Success from backend,
                                            //then redirect to manager login component
        }
        
      }, err => {
        console.log(err);
        this.errorMessage = "username already exist";
      }
    )
  }
}
