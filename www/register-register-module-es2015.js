(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  <img src=\"assets/img/dg.png\" class=\"logo\">\n  <ion-title>Registration</ion-title>\n</ion-toolbar>\n</ion-header> <!--Places the DG Asian Food Company Logo at the top of page. Sized and centered using logo tag in CSS-->\n\n<ion-content padding> <!--Starts content tag with padding-->\n  <form class=\"form\" [formGroup]=\"validations_form\"  (ngSubmit)=\"tryRegister(validations_form.value)\"> <!--handles form input validation and initialises tryRegister method from register.page.ts-->\n \n    <ion-item>\n      <ion-label  position=\"floating\" color=\"medium\">Email</ion-label>\n      <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n    </ion-item> <!--email address form input field. Initialised and validated from ngOnInit method in register.page.ts file-->\n    \n \n    <ion-item>\n      <ion-label  position=\"floating\" color=\"medium\">Password</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\" class=\"form-control\" required></ion-input>\n    </ion-item> <!--password form input field. Initialised and validated from ngOnInit method in register.page.ts file-->\n  \n \n    \n    <ion-button  class=\"submit-btn\" type=\"submit\" shape=\"round\"  [disabled]=\"!validations_form.valid\">Register</ion-button>\n    <!--Register button. Disabled until both email and password fields have been filled-->\n    \n    <label class=\"error-message\">{{errorMessage}}</label> <!--displays the appropriate error message to user-->\n  </form>\n\n  <div class=\"buttons\"> <!--Declared buttons div tag for CSS-->\n  <p class=\"go-to-login\">Already have an account? <ion-button size =\"small\" color=\"light\" shape=\"round\" (click)=\"goLoginPage()\">Sign In</ion-button></p>\n  <!--Sign In button passes user to login page by initialising goLoginPage method-->\n  \n  <p><ion-button size =\"small\" color=\"light\" shape=\"round\" routerLink=\"/home\">Home</ion-button></p>\n  </div>\n  <!--Home button passes user back to home page-->\n\n</ion-content> <!--Ends content tag-->"

/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.logo {\n  height: 175px;\n  width: 175px;\n  position: relative;\n}\n\nion-toolbar {\n  text-align: center;\n}\n\n.buttons {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxUQVBFRklWRVxcRGVza3RvcFxcSW9uaWMgUHJvamVjdHNcXG5ld0FwcC9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0gLy9jZW50ZXJzIGNhcmRzIGZvciBidXR0b25zIG9uIHNjcmVlblxyXG5cclxuLmxvZ28ge1xyXG4gICAgaGVpZ2h0OiAxNzVweDtcclxuICAgIHdpZHRoOiAxNzVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufSAvL3NldHMgbG9nbyBzaXplIGFuZCBwb3NpdGlvbiBvbiBzY3JlZW5cclxuXHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0gLy9jZW50ZXJzIHRvb2xiYXIgb24gc2NyZWVuXHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0gLy9jZW50ZXJzIGJ1dHRvbnMgb24gc2NyZWVuIiwiaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ28ge1xuICBoZWlnaHQ6IDE3NXB4O1xuICB3aWR0aDogMTc1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idXR0b25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");

 //imports Component and OnInit method
 //imports Forms components
 //imports AuthenticateService service
 //imports Router component
 //imports AlertController component
let RegisterPage = class RegisterPage {
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
    //ngOnInit method validates the user input on form and ensures that the email and password is required to use the Register button
    alertAccount() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Your account has been created.',
                subHeader: 'Please log in.',
                buttons: [{
                        text: 'OK',
                        handler: () => {
                            this.router.navigate(['login']);
                        }
                    },
                ]
            });
            yield alert.present();
            //alertAccount method declared and displays alert message to user when registration is succesful. Passes user to login page when OK clicked
        });
    }
    tryRegister(value) {
        this.authService.registerUser(value)
            .then(res => {
            console.log(res);
            this.errorMessage = "";
            this.alertAccount();
        }, err => {
            console.log(err);
            this.errorMessage = err.message;
        });
    }
    //tryRegister method declared and initialised from the Authentication service. Registration details stored on Firebase console. alertAccount method initialised
    goLoginPage() {
        this.router.navigate(['login']);
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map