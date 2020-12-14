import { Component, OnInit } from '@angular/core'; //imports Component and OnInit method
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'; //imports Forms components
import { AuthenticateService } from '../services/authentication.service'; //imports AuthenticateService service
import { Router } from '@angular/router'; //imports Router component
import { AlertController } from '@ionic/angular'; //imports AlertController component

 
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
 
 
  validations_form: FormGroup; //validations_form variable declared
  errorMessage: string = ''; //errorMessage variable declared
 
 
  constructor(private router: Router, private authService: AuthenticateService, private formBuilder: FormBuilder, private alertController: AlertController) {}
  //Router, AuthenticateService, FormBuilder and AlertController components declared in constructor class
  
  ngOnInit(){
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
  }

  //ngOnInit method validates the user input on form and ensures that the email and password is required to use the Register button

  async alertAccount() {
    const alert = await this.alertController.create({
      header: 'Your account has been created.',
      subHeader: 'Please log in.',
      
      buttons: [ {

        text: 'OK',
        handler: () => {

          this.router.navigate(['login']);
        }
      },

    ]
  }); await alert.present();

  //alertAccount method declared and displays alert message to user when registration is succesful. Passes user to login page when OK clicked

}
 
  tryRegister(value){
    this.authService.registerUser(value)
     .then(res => {
       console.log(res);
       this.errorMessage = "";
       this.alertAccount()
     }, err => {
       console.log(err);
       this.errorMessage = err.message;
     })
  }

  //tryRegister method declared and initialised from the Authentication service. Registration details stored on Firebase console. alertAccount method initialised
 
  goLoginPage(){
    this.router.navigate(['login']);
  }

  //goToLoginPage method declared and passes user to login page when button clicked


}

