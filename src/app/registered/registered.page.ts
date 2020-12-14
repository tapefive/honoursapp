import { Component, OnInit } from '@angular/core'; //imports Component and OnInit method
import { Router } from '@angular/router'; //imports Router component
import { AuthenticateService } from '../services/authentication.service'; //imports AuthenticateService service
 
@Component({
  selector: 'app-registered',
  templateUrl: './registered.page.html',
  styleUrls: ['./registered.page.scss'],
})
export class RegisteredPage implements OnInit {
 
 
  userEmail: string; //userEmail variable declared
 
  constructor(
    private router: Router, private authService: AuthenticateService) {}
    //Router, AuthenticateService components declared in constructor class
 
  ngOnInit(){
    
    this.authService.userDetails();
    this.userEmail = this.authService.userDetails().email;
    
  }

  //ngOnInit method declared and initialised from Authentication Service.
 
  logout(){
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      window.location.replace('home');
    })
    .catch(error => {
      console.log(error);
    })
  }
  //logout method assigned to sign out button. Imports logoutUser method from Authenticate Service. Refreshes home page and signs out user from application
}