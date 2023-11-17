import { Component } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import {User} from "./model/user.model";
import {AuthenticationService} from "./services/authentication.service";
import {Router} from "@angular/router";
import {Role} from "./model/role.enum";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-book-seller';
  faAngular = faAngular;
  currentUser: User = new User();


  constructor(private authenticationService: AuthenticationService , private router: Router) {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  isAdmin(){
    return this.currentUser?.role === Role.ADMIN
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}

