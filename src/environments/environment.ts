// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDvKYRGNIvbN-v1UQtn9tHp8k1cEtMs_lQ',
    authDomain: 'dg-prototype-d7140.firebaseapp.com',
    databaseURL: 'https://dg-prototype-d7140.firebaseio.com',
    projectId: 'dg-prototype-d7140',
    storageBucket: 'dg-prototype-d7140.appspot.com',
    messagingSenderId: '115932352660',

    //allows connection to Firebase for authentication, firestore and real time database
  },
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
