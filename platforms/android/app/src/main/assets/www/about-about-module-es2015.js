(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n    <img src=\"assets/img/dg.png\" class=\"logo\">\n    <ion-title>About Us</ion-title> <!--Page title-->\n  </ion-toolbar>\n</ion-header>\n<!--Places the DG Asian Food Company Logo at the top of page. Sized and centered using logo tag in CSS-->\n<ion-buttons slot=\"start\">\n  <ion-back-button color=\"danger\" text= \"Home\" defaultHref=\"/home\"></ion-back-button>\n</ion-buttons> <!--Back button passes user back to Home page-->\n\n<ion-content> <!--Start of content tag-->\n\n    <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle></ion-card-subtitle>\n          <ion-card-title>Who We Are</ion-card-title> <!--Who We Are card title-->\n        </ion-card-header>\n      \n        <ion-card-content>\n          The Dumfries & Galloway Asian Food Company was established in September 2019 with the aim of providing Asian food products and ingredients to local residents and International students\n          studying in the area via an easy to use mobile application.\n          <p></p>\n          As well as products and ingredients, the application also provides users with a variety of simple <a routerLink=\"/recipes\">recipes</a> to inspire and help people broaden their culinary horizons with the products and ingredients we sell.\n        </ion-card-content>\n      </ion-card> <!--Who We Are card content-->\n\n      <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle></ion-card-subtitle>\n            <ion-card-title>What We Sell</ion-card-title> <!--What We Sell card title-->\n          </ion-card-header>\n        \n          <ion-card-content>\n            A survey was conducted before the application was developed to establish what kind of products potential users would like to see sold within the application. \n            <p></p>\n            <img src=\"assets/img/chart.PNG\" class=\"survey\">\n            As you can see from the chart above, the survey results show that Sauces was the most popular choice. The types of sauces we sell include a variety of Chilli, Hoisin, Soy, Plum, Teriyake and Satay sauces.\n            <p></p>\n            The second most popular choice was Won Ton & Dumplings. We sell a variety of flavours including Pork & Chive, Prawn, Chicken and Vegetable frozen dumplings. We also sell dumpling wrappers for people who want to make their own at home.\n            <p></p>\n            Please refer to our <a routerLink=\"/products\">products</a> section to find out more about the Chinese, Thai, Vietnamese, Indian and Malayasian products we sell at the Dumfries and Galloway Asain Food Company.\n          </ion-card-content>\n        </ion-card> <!--What We Sell card content-->\n\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle></ion-card-subtitle>\n            <ion-card-title>Privacy Policy</ion-card-title> <!--Privacy Policy card title-->\n          </ion-card-header>\n        \n          <ion-card-content>\n            Sum Boy Development built the Dumfries & Galloway Asian Food Company prototype as a free app. \n            <p></p>\n            This service is provided by Sum Boy Development at no cost and is intended for use as is.\n            <p></p>\n            This section is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my service.\n            <p></p>\n            <p></p>\n            <p></p>\n            <b>This app only asks users to provide an email address and password to test the login authentication and account registration features which are stored on a secure Firebase console.</b>\n            <p></p>\n            I may update the Privacy Policy from time to time. Thus, you are advised to review this section periodically for any changes.\n            <p></p>\n            If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me.\n          </ion-card-content>\n        </ion-card>\n        <!--Privacy Policy card content-->\n\n</ion-content> <!--End of content tag-->\n"

/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");







const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]
    }
];
let AboutPageModule = class AboutPageModule {
};
AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
    })
], AboutPageModule);



/***/ }),

/***/ "./src/app/about/about.page.scss":
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  height: 175px;\n  width: 175px;\n  position: relative;\n}\n\nion-toolbar {\n  text-align: center;\n}\n\n.survey {\n  height: 568px;\n  width: 649px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXFVzZXJzXFxUQVBFRklWRVxcRGVza3RvcFxcSW9uaWMgUHJvamVjdHNcXG5ld0FwcC9zcmNcXGFwcFxcYWJvdXRcXGFib3V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWJvdXQvYWJvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICAgIGhlaWdodDogMTc1cHg7XHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn0gLy9zZXRzIGxvZ28gc2l6ZSBhbmQgcG9zaXRpb24gb24gc2NyZWVuXHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0gLy9jZW50ZXJzIHRvb2xiYXIgb24gc2NyZWVuXHJcblxyXG4uc3VydmV5IHtcclxuICAgIGhlaWdodDogNTY4cHg7XHJcbiAgICB3aWR0aDogNjQ5cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn0gLy9zZXRzIHN1cnZleSBpbWFnZSBzaXplIGFuZCBwb3NpdGlvbiBvbiBzY3JlZW5cclxuIiwiLmxvZ28ge1xuICBoZWlnaHQ6IDE3NXB4O1xuICB3aWR0aDogMTc1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdXJ2ZXkge1xuICBoZWlnaHQ6IDU2OHB4O1xuICB3aWR0aDogNjQ5cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/about/about.page.ts":
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AboutPage = class AboutPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
AboutPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.page.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.page.html"),
        styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/about/about.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AboutPage);



/***/ })

}]);
//# sourceMappingURL=about-about-module-es2015.js.map