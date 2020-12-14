(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <img src=\"assets/img/dg.png\" class=\"logo\">\n  </ion-toolbar>\n</ion-header>  <!--Places the DG Asian Food Company Logo at the top of page. Sized and centered using logo tag in CSS-->\n\n<ion-content> <!--Start of content tag-->\n\n    <ion-card>\n        <ion-card-content>\n            <ion-row>\n              <ion-col col-4></ion-col>\n              <ion-col col-4>\n                <ion-button size =\"small\" color=\"light\" shape=\"round\" routerLink=\"/products\" routerDirection=\"root\">Products</ion-button>\n              </ion-col>\n              <ion-col col-4></ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card> <!--Products card on home page with button which directs to products page when clicked by user -->\n\n        <ion-card>\n          <ion-card-content>\n              <ion-row>\n                <ion-col col-4></ion-col>\n                <ion-col col-4>\n                  <ion-button size =\"small\" color=\"light\" shape=\"round\" routerLink=\"/recipes\" routerDirection=\"root\">Recipes</ion-button>\n                </ion-col>\n                <ion-col col-4></ion-col>\n              </ion-row>\n            </ion-card-content>\n        </ion-card> <!--Recipes card on home page with button which directs to recipes page when clicked by user -->\n\n      <ion-card> \n        <ion-card-content>\n            <ion-row>\n              <ion-col col-4></ion-col>\n              <ion-col col-4>\n                  <ion-button size =\"small\" color=\"light\" shape=\"round\" routerLink=\"/about\" routerDirection=\"root\">About Us</ion-button>\n              </ion-col>\n              <ion-col col-4></ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card> <!--About Us card on home page with button which directs to About Us page when clicked by user -->\n\n\n      <ion-card>\n        <ion-card-content>\n            <ion-row>\n              <ion-col col-4></ion-col>\n              <ion-col col-4>\n                <ion-button size =\"small\" color=\"light\" shape=\"round\" routerLink=\"/registered\" routerDirection=\"root\">My Account</ion-button>\n              </ion-col>\n              <ion-col col-4></ion-col>\n            </ion-row>\n          </ion-card-content>\n      </ion-card> <!--My Account card on home page with button which directs to My Account page when clicked by user -->\n\n      <ion-card>\n        <ion-card-content *ngIf=\"loggedIn\"> <!-- Conditional directive. Shopping List card and button will only appear when user is logged in -->\n            <ion-row>\n              <ion-col col-4></ion-col>\n              <ion-col col-4>\n                <ion-button size =\"small\" color=\"light\" shape=\"round\" routerLink=\"/list\" routerDirection=\"root\">Shopping List</ion-button>\n              </ion-col>\n              <ion-col col-4></ion-col>\n            </ion-row>\n          </ion-card-content>\n      </ion-card> <!--Shopping List card with button on home page displayed when user is logged in, directs to Shopping List page when clicked by user -->\n\n      <ion-card>\n        <ion-card-content *ngIf=\"loggedIn\"> <!-- Conditional directive. Sign Out card and button will only appear when user is logged in -->\n            <ion-row>\n              <ion-col col-4></ion-col>\n              <ion-col col-4>\n                <ion-button size =\"small\" color=\"danger\" shape=\"round\" fill=\"outline\" (click)=\"logout();\" >Sign Out</ion-button>\n                <p></p>\n                {{loggedIn}} is logged in <!-- Shows the current user that is logged underneath sign out button. See typsecript file for loggedIn variable declaration-->\n              </ion-col>\n              <ion-col col-4></ion-col>\n            </ion-row>\n          </ion-card-content>\n      </ion-card> <!--Sign Out card with button on home page displayed when user is logged in, signs user out of application clicked by user -->\n\n      \n\n\n  \n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.logo {\n  height: 175px;\n  width: 175px;\n  position: relative;\n}\n\nion-toolbar {\n  text-align: center;\n}\n\n.buttons {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFRBUEVGSVZFXFxEZXNrdG9wXFxJb25pYyBQcm9qZWN0c1xcbmV3QXBwL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAvL2NlbnRlcnMgY2FyZHMgZm9yIGJ1dHRvbnMgb24gc2NyZWVuXG59XG5cbi5sb2dvIHtcbiAgICBoZWlnaHQ6IDE3NXB4O1xuICAgIHdpZHRoOiAxNzVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICAvL3NldHMgbG9nbyBzaXplIGFuZCBwb3NpdGlvbiBvbiBzY3JlZW5cbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLy9jZW50ZXJzIHRvb2xiYXIgb24gc2NyZWVuXG59XG5cbi5idXR0b25zIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8vY2VudGVycyBidXR0b25zIG9uIHNjcmVlblxufVxuIiwiaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ28ge1xuICBoZWlnaHQ6IDE3NXB4O1xuICB3aWR0aDogMTc1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idXR0b25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");

 //imports Component and OnInit method
 //imports authentication service for displaying user name and logging out functionality 
let HomePage = class HomePage {
    constructor(authService) {
        this.authService = authService;
    } //Router and Authenticate service imports declared in constructor class
    ngOnInit() {
        if (this.authService.userDetails()) {
            this.loggedIn = this.authService.userDetails().email;
        }
    } //ngOnInit method contains a conditional statement. Assigns email (username) to loggedIn variable if user is logged in. Imports userDetails method from Authenticate Service
    logout() {
        this.authService.logoutUser()
            .then(res => {
            console.log(res);
            window.location.replace('home');
        })
            .catch(error => {
            console.log(error);
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map