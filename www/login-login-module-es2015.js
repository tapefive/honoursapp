(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n    <img src=\"assets/img/dg.png\" class=\"logo\">\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header> <!--Places the DG Asian Food Company Logo at the top of page. Sized and centered using logo tag in CSS-->\n\n<ion-content padding> <!--Starts content tag with padding-->\n  <form class=\"form\" [formGroup]=\"validations_form\"  (ngSubmit)=\"loginUser(validations_form.value)\">  <!--handles form input validation and initialises loginUser method from login.page.ts-->\n \n    <ion-item>\n      <ion-label  position=\"floating\" color=\"medium\">Email</ion-label>\n      <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n    </ion-item> <!--email address form input field. Initialised and validated from ngOnInit method in login.page.ts file-->\n\n  \n    <ion-item>\n      <div class=\"item-content\">\n      <ion-label  position=\"floating\" color=\"medium\">Password</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\" class=\"form-control\" required></ion-input>\n      </div>\n    </ion-item> <!--password form input field. Initialised and validated from ngOnInit method in login.page.ts file-->\n    \n    <ion-button  class=\"submit-btn\" type=\"submit\" shape=\"round\"  [disabled]=\"!validations_form.valid\">Sign In</ion-button>\n\n    <!--Sign in button. Disabled until both email and password fields have been filled-->\n \n    <label class=\"error-message\">{{errorMessage}}</label> <!--displays the appropriate error message to user-->\n  </form>\n<div class=\"buttons\"> <!--Declared buttons div tag for CSS-->\n  <p class=\"go-to-register\">\n    No account yet? <ion-button size =\"small\" color=\"light\" shape=\"round\" (click)=\"goToRegisterPage()\">Create an account</ion-button> \n  </p>\n  <!--Create an account button passes user to register page by initialising goToRegisterPage method-->\n  <p><ion-button size =\"small\" color=\"light\" shape=\"round\" routerLink=\"/home\">Home</ion-button> <!--Home button passes user back to home page-->\n  </p>\n</div>\n\n  \n</ion-content> <!--Ends content tag-->\n\n"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.logo {\n  height: 175px;\n  width: 175px;\n  position: relative;\n}\n\nion-toolbar {\n  text-align: center;\n}\n\n.buttons {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxUQVBFRklWRVxcRGVza3RvcFxcSW9uaWMgUHJvamVjdHNcXG5ld0FwcC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREdBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0gLy9jZW50ZXJzIGNhcmRzIGZvciBidXR0b25zIG9uIHNjcmVlblxyXG5cclxuXHJcbi5sb2dvIHtcclxuICAgIGhlaWdodDogMTc1cHg7XHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn0gLy9zZXRzIGxvZ28gc2l6ZSBhbmQgcG9zaXRpb24gb24gc2NyZWVuXHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0gLy9jZW50ZXJzIHRvb2xiYXIgb24gc2NyZWVuXHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0gLy9jZW50ZXJzIGJ1dHRvbnMgb24gc2NyZWVuXHJcblxyXG5cclxuXHJcbiIsImlvbi1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dvIHtcbiAgaGVpZ2h0OiAxNzVweDtcbiAgd2lkdGg6IDE3NXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnV0dG9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");

 //imports Component and OnInit method
 //imports Forms components
 //imports Router component
 //imports AuthenticateService service
 //imports AlertController component
let LoginPage = class LoginPage {
    constructor(router, authService, formBuilder, alertController) {
        this.router = router;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.errorMessage = ''; //errorMessage variable declared
    }
    //Router, AuthenticateService, FormBuilder and AlertController components declared in constructor class
    ngOnInit() {
        this.validations_form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
        });
    }
    //ngOnInit method validates the user input on the form and ensures that the email and password is required to use the Sign In button
    alertAccount() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Log in successful.',
                subHeader: 'Welcome to the Dumfries & Galloway Asian Food Company.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    //alertAccount method declared and displays alert message to user when login is successful
    loginUser(value) {
        this.authService.loginExisting(value)
            .then(res => {
            console.log(res);
            this.errorMessage = "";
            this.alertAccount();
            this.router.navigate(['registered']);
        }, err => {
            this.errorMessage = err.message;
        });
    }
    //loginUser method declared and initialised from Authentication service. Passes user to registered page when login successful. alertAccount method initialised
    goToRegisterPage() {
        this.router.navigate(['register']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map