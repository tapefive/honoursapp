(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registered-registered-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/registered/registered.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registered/registered.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  <img src=\"assets/img/dg.png\" class=\"logo\">\n  <ion-title>My Account</ion-title>\n</ion-toolbar>\n</ion-header> <!--Places the DG Asian Food Company Logo at the top of page. Sized and centered using logo tag in CSS-->\n\n<ion-content padding> <!--Starts content tag with padding-->\n \n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        Username : {{userEmail}} <!--Passes current user email on screen as username-->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class=\"buttons\"> <!--Declared buttons div tag for CSS-->\n  <p><ion-button size =\"small\" color=\"light\" shape=\"round\" routerLink=\"/home\">Home</ion-button></p> <!--Home button passes user back to home page-->\n\n  <p><ion-button size =\"small\" color=\"danger\" shape=\"round\" fill=\"outline\" (click)=\"logout();\">Sign Out</ion-button></p>\n  </div>\n\n  <!--Sign Out button signs current user out of application and passes user back to home page. Initialises logout method from register.page.ts -->\n  \n  \n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/registered/registered.module.ts":
/*!*************************************************!*\
  !*** ./src/app/registered/registered.module.ts ***!
  \*************************************************/
/*! exports provided: RegisteredPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteredPageModule", function() { return RegisteredPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registered_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registered.page */ "./src/app/registered/registered.page.ts");







var routes = [
    {
        path: '',
        component: _registered_page__WEBPACK_IMPORTED_MODULE_6__["RegisteredPage"]
    }
];
var RegisteredPageModule = /** @class */ (function () {
    function RegisteredPageModule() {
    }
    RegisteredPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_registered_page__WEBPACK_IMPORTED_MODULE_6__["RegisteredPage"]]
        })
    ], RegisteredPageModule);
    return RegisteredPageModule;
}());



/***/ }),

/***/ "./src/app/registered/registered.page.scss":
/*!*************************************************!*\
  !*** ./src/app/registered/registered.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.logo {\n  height: 175px;\n  width: 175px;\n  position: relative;\n}\n\nion-toolbar {\n  text-align: center;\n}\n\n.buttons {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXJlZC9DOlxcVXNlcnNcXFRBUEVGSVZFXFxEZXNrdG9wXFxJb25pYyBQcm9qZWN0c1xcbmV3QXBwL3NyY1xcYXBwXFxyZWdpc3RlcmVkXFxyZWdpc3RlcmVkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXJlZC9yZWdpc3RlcmVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXJlZC9yZWdpc3RlcmVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAvL2NlbnRlcnMgY2FyZHMgZm9yIGJ1dHRvbnMgb24gc2NyZWVuXHJcblxyXG4ubG9nbyB7XHJcbiAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59IC8vc2V0cyBsb2dvIHNpemUgYW5kIHBvc2l0aW9uIG9uIHNjcmVlblxyXG5cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAvL2NlbnRlcnMgdG9vbGJhciBvbiBzY3JlZW5cclxuXHJcbi5idXR0b25zIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAvL2NlbnRlcnMgYnV0dG9ucyBvbiBzY3JlZW4iLCJpb24tY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9nbyB7XG4gIGhlaWdodDogMTc1cHg7XG4gIHdpZHRoOiAxNzVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ1dHRvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/registered/registered.page.ts":
/*!***********************************************!*\
  !*** ./src/app/registered/registered.page.ts ***!
  \***********************************************/
/*! exports provided: RegisteredPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteredPage", function() { return RegisteredPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");

 //imports Component and OnInit method
 //imports Router component
 //imports AuthenticateService service
var RegisteredPage = /** @class */ (function () {
    function RegisteredPage(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    //Router, AuthenticateService components declared in constructor class
    RegisteredPage.prototype.ngOnInit = function () {
        this.authService.userDetails();
        this.userEmail = this.authService.userDetails().email;
    };
    //ngOnInit method declared and initialised from Authentication Service.
    RegisteredPage.prototype.logout = function () {
        this.authService.logoutUser()
            .then(function (res) {
            console.log(res);
            window.location.replace('home');
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    RegisteredPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"] }
    ]; };
    RegisteredPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registered',
            template: __webpack_require__(/*! raw-loader!./registered.page.html */ "./node_modules/raw-loader/index.js!./src/app/registered/registered.page.html"),
            styles: [__webpack_require__(/*! ./registered.page.scss */ "./src/app/registered/registered.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"]])
    ], RegisteredPage);
    return RegisteredPage;
}());



/***/ })

}]);
//# sourceMappingURL=registered-registered-module-es5.js.map