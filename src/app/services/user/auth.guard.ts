import { Injectable } from '@angular/core'; //imports Injectable component
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router,} from '@angular/router'; //imports CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot & Router components
import { Observable } from 'rxjs'; //imports Observable component
import * as firebase from 'firebase/app'; //imports Firebase
import 'firebase/auth'; //imports Firebase authentication

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user: firebase.User) => {
        if (user) {
          resolve(true);
        } else {
          this.router.navigate(['login']);
          resolve(false);
        }
      });
    });
  }
}

//onAuthStateChanged() method connects to Firebase Authentication and listens to changes in the user state to respond to them
//adds an observer for auth state changes. Whenever an authentication change happens, it will trigger the observer and the function inside it will run again
//if the user is logged in they will be able to access the MyAccount page (Registered)
//if they user isn't logged in they will be passed to the login page where they can log in or create an account on the Register page