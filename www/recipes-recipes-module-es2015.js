(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipes-recipes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipes.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipes.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  <img src=\"assets/img/dg.png\" class=\"logo\">\n  <ion-title>Recipes</ion-title> <!--Page title-->\n</ion-toolbar>\n</ion-header> <!--Places the DG Asian Food Company Logo at the top of page. Sized and centered using logo tag in CSS-->\n<ion-buttons slot=\"start\">\n<ion-back-button color=\"danger\" text= \"Home\" defaultHref=\"/home\"></ion-back-button> <!--Back button passes user back to Home page-->\n</ion-buttons>\n\n<ion-content> <!--Start of content tag-->\n\n    <ion-card>\n        <ion-card-content>\n            <ion-row>\n              <ion-col col-4></ion-col>\n              <ion-col col-4>\n                <ion-button size =\"small\" color=\"light\" shape=\"round\" routerLink=\"/redthai\" routerDirection=\"root\">Red Thai Chicken Curry</ion-button>\n              </ion-col>\n              <ion-col col-4></ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card> <!--Card on Recipes page with button which directs to Red Thai Chicken Curry recipe when clicked by user -->\n\n        <ion-card>\n          <ion-card-content>\n              <ion-row>\n                <ion-col col-4></ion-col>\n                <ion-col col-4>\n                  <ion-button size =\"small\" color=\"light\" shape=\"round\" routerLink=\"/spchix\" routerDirection=\"root\">Salt & Pepper Chicken</ion-button>\n                </ion-col>\n                <ion-col col-4></ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card> <!--Card on Recipes page with button which directs to Salt & Pepper Chicken recipe when clicked by user -->\n\n          <ion-card>\n            <ion-card-content>\n                <ion-row>\n                  <ion-col col-4></ion-col>\n                  <ion-col col-4>\n                    <ion-button size =\"small\" color=\"light\" shape=\"round\" routerLink=\"/dumplings\" routerDirection=\"root\">Pork & Chive Dumplings</ion-button>\n                  </ion-col>\n                  <ion-col col-4></ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card> <!--Card on Recipes page with button which directs to Pork and Chive Dumplings recipe when clicked by user -->\n\n</ion-content> <!--End of content tag-->\n"

/***/ }),

/***/ "./src/app/recipes/recipes.module.ts":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.module.ts ***!
  \*******************************************/
/*! exports provided: RecipesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesPageModule", function() { return RecipesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recipes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes.page */ "./src/app/recipes/recipes.page.ts");







const routes = [
    {
        path: '',
        component: _recipes_page__WEBPACK_IMPORTED_MODULE_6__["RecipesPage"]
    }
];
let RecipesPageModule = class RecipesPageModule {
};
RecipesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_recipes_page__WEBPACK_IMPORTED_MODULE_6__["RecipesPage"]]
    })
], RecipesPageModule);



/***/ }),

/***/ "./src/app/recipes/recipes.page.scss":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  height: 175px;\n  width: 175px;\n  position: relative;\n}\n\nion-toolbar {\n  text-align: center;\n}\n\nion-card {\n  position: relative;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9DOlxcVXNlcnNcXFRBUEVGSVZFXFxEZXNrdG9wXFxJb25pYyBQcm9qZWN0c1xcbmV3QXBwL3NyY1xcYXBwXFxyZWNpcGVzXFxyZWNpcGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVjaXBlcy9yZWNpcGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9yZWNpcGVzL3JlY2lwZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gICAgaGVpZ2h0OiAxNzVweDtcclxuICAgIHdpZHRoOiAxNzVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufSAvL3NldHMgbG9nbyBzaXplIGFuZCBwb3NpdGlvbiBvbiBzY3JlZW5cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAvL2NlbnRlcnMgdG9vbGJhciBvbiBzY3JlZW5cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAvL2NlbnRlcnMgY2FyZHMgZm9yIGJ1dHRvbnMgb24gc2NyZWVuIiwiLmxvZ28ge1xuICBoZWlnaHQ6IDE3NXB4O1xuICB3aWR0aDogMTc1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/recipes/recipes.page.ts":
/*!*****************************************!*\
  !*** ./src/app/recipes/recipes.page.ts ***!
  \*****************************************/
/*! exports provided: RecipesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesPage", function() { return RecipesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecipesPage = class RecipesPage {
    constructor() { }
    ngOnInit() { }
};
RecipesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipes',
        template: __webpack_require__(/*! raw-loader!./recipes.page.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipes.page.html"),
        styles: [__webpack_require__(/*! ./recipes.page.scss */ "./src/app/recipes/recipes.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RecipesPage);



/***/ })

}]);
//# sourceMappingURL=recipes-recipes-module-es2015.js.map