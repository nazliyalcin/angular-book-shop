import {Component, OnInit} from '@angular/core';
import {faUser, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {User} from "../../model/user.model";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user: User = new User();
  faUser = faUserCircle;
  errorMessage: string = "";
  constructor(private authenticationService: AuthenticationService,private router: Router) {

  }

  ngOnInit(): void {
    if(this.authenticationService.currentUserValue?.id)
    {
      this.router.navigate(['/profile']) ;
    }
  }

  login(){
    this.authenticationService.login(this.user).subscribe(data => {
      this.router.navigate(['/profile']);

    }, error => {
      if(error?.status === 401 ){
        this.errorMessage = "Unauthorized user";
      }else{
        this.errorMessage = "Unexpected error. Error is: " + error?.errorMessage;
        console.log(error);
      }
    })
  }

}
