(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipes-spchix-spchix-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/spchix/spchix.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/spchix/spchix.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  <img src=\"assets/img/dg.png\" class=\"logo\">\n  <ion-title>Salt & Pepper Chicken</ion-title> <!--Page title-->\n</ion-toolbar>\n</ion-header> <!--Places the DG Asian Food Company Logo at the top of page. Sized and centered using logo tag in CSS-->\n\n<ion-buttons slot=\"start\">\n<ion-back-button color=\"danger\" defaultHref=\"/recipes\"></ion-back-button> <!--Back button passes user back to Recipes page-->\n</ion-buttons>\n\n<ion-content> <!--Start of content tag-->\n  <div text-center>\n    <img src=\"assets/img/spchix.jpg\"> <!--Recipe image-->\n  </div>\n    <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle></ion-card-subtitle>\n          \n          <ion-card-title>Ingredients</ion-card-title> <!--Card title for ingredients-->\n        </ion-card-header>\n      \n        <ion-card-content>\n          8 diced chicken breasts\n          <p></p>\n          6 spring onions, thinly sliced\n          <p></p>\n          2 red finger chilli, thinly sliced\n          <p></p>\n          2 garlic cloves, crushed\n          <p></p>\n          2 tbsp Chinese five-spice powder\n          <p></p>\n          2 tbsp fine salt\n          <p></p>\n          120g cornflour\n          <p></p>\n          2 tbsp ground black pepper\n          <p></p>\n          400ml vegetable oil\n        </ion-card-content>\n        <!--Card content shows ingredients required-->\n          \n      </ion-card>\n\n      <ion-card>\n          <ion-card-header>\n            \n            <ion-card-title>Method</ion-card-title> <!--Card title for recipe method-->\n          </ion-card-header>\n        \n          <ion-card-content>\n            1. In a large bowl, mix the cornflour, salt, five-spice and tablespoon of pepper together and set aside\n            <p></p>\n            2. Heat the oil in a wok or large pan to 180C on a cooking thermometer, or until a teaspoon of cornflour sizzles when dropped in\n            <p></p>\n            <b>(CAUTION: Hot oil can be dangerous. Do not leave unattended)</b>\n            <p></p>\n            3. Toss the chicken in the flour mixture, working in batches\n            <p></p>\n            4. Carefully add it to the oil and cook for 2–3 minutes on one side, until golden brown and cooked though\n            <p></p>\n            5. Turn and cook for a further 2–3 minutes. Drain on kitchen paper\n            <p></p>\n            6. Heat the remaining 1 tablespoon of oil in a clean pan over a medium heat\n            <p></p>\n            7. Add the spring onions, chilli, garlic and remaining teaspoon of pepper with a pinch of salt\n            <p></p>\n            8. Fry for 1–2 minutes, then add the cooked chicken\n            <p></p> \n            9. Toss and cook for a further 2–3 minutes, until the chicken is coated in the onions, garlic and chilli\n            <p></p>\n            10. Serve immediately with chips or fried rice\n            <p></p>\n            <ion-card-title color=\"danger\">Serves 4</ion-card-title>\n          </ion-card-content>\n        </ion-card>\n        <!--Card content shows recipe method steps-->\n\n</ion-content> <!--End of content tag-->\n\n"

/***/ }),

/***/ "./src/app/recipes/spchix/spchix.module.ts":
/*!*************************************************!*\
  !*** ./src/app/recipes/spchix/spchix.module.ts ***!
  \*************************************************/
/*! exports provided: SpchixPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpchixPageModule", function() { return SpchixPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _spchix_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spchix.page */ "./src/app/recipes/spchix/spchix.page.ts");







var routes = [
    {
        path: '',
        component: _spchix_page__WEBPACK_IMPORTED_MODULE_6__["SpchixPage"]
    }
];
var SpchixPageModule = /** @class */ (function () {
    function SpchixPageModule() {
    }
    SpchixPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_spchix_page__WEBPACK_IMPORTED_MODULE_6__["SpchixPage"]]
        })
    ], SpchixPageModule);
    return SpchixPageModule;
}());



/***/ }),

/***/ "./src/app/recipes/spchix/spchix.page.scss":
/*!*************************************************!*\
  !*** ./src/app/recipes/spchix/spchix.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  height: 175px;\n  width: 175px;\n  position: relative;\n}\n\nion-toolbar {\n  text-align: center;\n}\n\nion-card {\n  position: relative;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9zcGNoaXgvQzpcXFVzZXJzXFxUQVBFRklWRVxcRGVza3RvcFxcSW9uaWMgUHJvamVjdHNcXG5ld0FwcC9zcmNcXGFwcFxccmVjaXBlc1xcc3BjaGl4XFxzcGNoaXgucGFnZS5zY3NzIiwic3JjL2FwcC9yZWNpcGVzL3NwY2hpeC9zcGNoaXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvc3BjaGl4L3NwY2hpeC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XHJcbiAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59IC8vc2V0cyBsb2dvIHNpemUgYW5kIHBvc2l0aW9uIG9uIHNjcmVlblxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59IC8vY2VudGVycyB0b29sYmFyIG9uIHNjcmVlblxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSAvL2NlbnRlcnMgY2FyZHMgZm9yIGJ1dHRvbnMgb24gc2NyZWVuXHJcblxyXG5cclxuXHJcbiIsIi5sb2dvIHtcbiAgaGVpZ2h0OiAxNzVweDtcbiAgd2lkdGg6IDE3NXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/recipes/spchix/spchix.page.ts":
/*!***********************************************!*\
  !*** ./src/app/recipes/spchix/spchix.page.ts ***!
  \***********************************************/
/*! exports provided: SpchixPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpchixPage", function() { return SpchixPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SpchixPage = /** @class */ (function () {
    function SpchixPage(router) {
        this.router = router;
    }
    SpchixPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SpchixPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spchix',
            template: __webpack_require__(/*! raw-loader!./spchix.page.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/spchix/spchix.page.html"),
            styles: [__webpack_require__(/*! ./spchix.page.scss */ "./src/app/recipes/spchix/spchix.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SpchixPage);
    return SpchixPage;
}());



/***/ })

}]);
//# sourceMappingURL=recipes-spchix-spchix-module-es5.js.map