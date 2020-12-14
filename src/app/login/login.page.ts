import { Component, OnInit } from '@angular/core'; //imports Component and OnInit method
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'; //imports Forms components
import { Router } from '@angular/router'; //imports Router component
import { AuthenticateService } from '../services/authentication.service'; //imports AuthenticateService service
import { AlertController } from '@ionic/angular'; //imports AlertController component
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  validations_form: FormGroup; //validations_form variable declared
  errorMessage: string = ''; //errorMessage variable declared
 
  constructor( private router: Router, private authService: AuthenticateService, private formBuilder: FormBuilder, private alertController: AlertController) { }
  //Router, AuthenticateService, FormBuilder and AlertController components declared in constructor class
 
  ngOnInit() {
 
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
  }

  //ngOnInit method validates the user input on the form and ensures that the email and password is required to use the Sign In button
 

  async alertAccount() {
    const alert = await this.alertController.create({
      header: 'Log in successful.',
      subHeader: 'Welcome to the Dumfries & Galloway Asian Food Company.',
      buttons: ['OK']
   });

   await alert.present();

}

//alertAccount method declared and displays alert message to user when login is successful
 
 
  loginUser(value){
    this.authService.loginExisting(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.alertAccount()
      this.router.navigate(['registered']);
    }, err => {
      this.errorMessage = err.message;
    })
  }

  //loginUser method declared and initialised from Authentication service. Passes user to registered page when login successful. alertAccount method initialised
 
  goToRegisterPage(){
    this.router.navigate(['register']);
  }

  //goToRegisterPage method declared and passes user to register page when button clicked


}

