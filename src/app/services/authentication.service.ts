import { Injectable } from "@angular/core"; //imports Injectable module
import * as firebase from 'firebase/app'; //imports Firebase service module
 
@Injectable()
export class AuthenticateService {
 
  constructor(){}
 
  registerUser(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(value.email, value.password) 
     .then(
       res => resolve(res),
       err => reject(err))
   })
  } 
  
  // RegisterUser method creates a new user account associated with the specified email address and password.
  // On successful creation of the user account, this user will also be signed in to your application.
  // User account creation can fail if the account already exists on the Firebase console or the password is invalid
 
  loginExisting(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  } 

  // loginExistingUser method synchronously signs in using an email and password. Fails with an error if the email address and password do not match.
  // The email address serves as a unique identifier for the user, and the password is used to access the user's account in Firebase project.
 
  logoutUser(){
    return new Promise<void>((resolve, reject) => {
      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(() => {
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
  }

  //logoutUser method logs out the current user from the application using the Firebase service
 
  userDetails(){
    return firebase.auth().currentUser;
  }

//userDetails method returns current user from Firebase console

}


