import { Component, OnInit } from '@angular/core'; //imports Component and OnInit method
import { AuthenticateService } from '../services/authentication.service'; //imports authentication service for displaying user name and logging out functionality 



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})


export class HomePage implements OnInit { //starts HomePage class

  loggedIn: any; //logged in variable declared
 
  constructor(private authService: AuthenticateService) {} //Router and Authenticate service imports declared in constructor class
 
  

  ngOnInit(){
    
    if(this.authService.userDetails()){
      this.loggedIn = this.authService.userDetails().email;
    }
  } //ngOnInit method contains a conditional statement. Assigns email (username) to loggedIn variable if user is logged in. Imports userDetails method from Authenticate Service

  
  
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
  //logout method assigned to sign out button on home page. Imports logoutUser method from Authenticate Service. Refreshes home page and signs out user from application
}

