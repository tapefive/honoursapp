(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipes-redthai-redthai-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/redthai/redthai.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/redthai/redthai.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n    <img src=\"assets/img/dg.png\" class=\"logo\">\n    <ion-title>Red Thai Chicken Curry</ion-title> <!--Page title-->\n  </ion-toolbar>\n</ion-header> <!--Places the DG Asian Food Company Logo at the top of page. Sized and centered using logo tag in CSS-->\n\n<ion-buttons slot=\"start\">\n  <ion-back-button color=\"danger\" defaultHref=\"/recipes\"></ion-back-button> <!--Back button passes user back to Recipes page-->\n</ion-buttons>\n\n<ion-content> <!--Start of content tag-->\n\n  <div text-center>\n    <img src=\"assets/img/redcurry.jpg\"> <!--Recipe image-->\n  </div>\n    <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle></ion-card-subtitle> \n          \n          <ion-card-title>Ingredients</ion-card-title> <!--Card title for ingredients-->\n        </ion-card-header>\n      \n        <ion-card-content>\n          2 tablespoons of Mae Ploy Red Curry Paste\n          <p></p>\n          350g sliced chicken\n          <p></p>\n          200ml coconut milk\n          <p></p>\n          2 teaspoons of garlic puree\n          <p></p>\n          4 slices of fresh ginger\n          <p></p>\n          1 tablespoon of Thai fish sauce\n          <p></p>\n          2 tablespoons of sesame oil\n          <p></p>\n          100ml of chicken stock\n          <p></p>\n          2 lime leaves (shredded)\n          <p></p>\n          1/2 red pepper & 1/2 green pepper\n          <p></p>\n          2 tablespoons sugar\n          <p></p>\n          1 finely chopped red chilli to garnish\n        </ion-card-content> \n        <!--Card content shows ingredients required-->\n          \n      </ion-card>\n\n      <ion-card>\n          <ion-card-header>\n            \n            <ion-card-title>Method</ion-card-title> <!--Card title for recipe method-->\n          </ion-card-header>\n        \n          <ion-card-content>\n            1. In a small saucepan warm up the coconut milk over a medium heat\n            <p></p>\n            2. Meanwhile in a wok add the sesame oil and heat until very hot\n            <p></p>\n            3. Swirl the hot oil around the wok then add the garlic. Stir fry for about 10-20 seconds until it begins to brown\n            <p></p>\n            4. Add the curry paste, stir fry for 10 seconds then add the warm coconut milk\n            <p></p>\n            5. Cook the coconut milk mixture for abut 5 minutes until it begins to thicken\n            <p></p>\n            6. Stir in the fish sauce, fresh ginger and sugar\n            <p></p>\n            7. Add the sliced chicken and cook for another 5 minutes or until all the chicken has turned white\n            <p></p>\n            8. Stir in the red and green peppers\n            <p></p>\n            9. Pour in the chicken stock, bring to the boil and simmer gently for 2 minutes\n            <p></p>\n            10. Stir in the shredded lime leaves\n            <p></p>\n            11. Turn into a warm serving dish, garnish with chopped red chilli\n            <p></p>\n            12. Serve immediately with steamed or boiled rice\n            <p></p>\n            <ion-card-title color=\"danger\">Serves 4</ion-card-title>\n          </ion-card-content>\n        </ion-card>\n        <!--Card content shows recipe method steps-->\n\n</ion-content> <!--End of content tag-->\n"

/***/ }),

/***/ "./src/app/recipes/redthai/redthai.module.ts":
/*!***************************************************!*\
  !*** ./src/app/recipes/redthai/redthai.module.ts ***!
  \***************************************************/
/*! exports provided: RedthaiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedthaiPageModule", function() { return RedthaiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _redthai_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redthai.page */ "./src/app/recipes/redthai/redthai.page.ts");







var routes = [
    {
        path: '',
        component: _redthai_page__WEBPACK_IMPORTED_MODULE_6__["RedthaiPage"]
    }
];
var RedthaiPageModule = /** @class */ (function () {
    function RedthaiPageModule() {
    }
    RedthaiPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_redthai_page__WEBPACK_IMPORTED_MODULE_6__["RedthaiPage"]]
        })
    ], RedthaiPageModule);
    return RedthaiPageModule;
}());



/***/ }),

/***/ "./src/app/recipes/redthai/redthai.page.scss":
/*!***************************************************!*\
  !*** ./src/app/recipes/redthai/redthai.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  height: 175px;\n  width: 175px;\n  position: relative;\n}\n\nion-toolbar {\n  text-align: center;\n}\n\nion-card {\n  position: relative;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWR0aGFpL0M6XFxVc2Vyc1xcVEFQRUZJVkVcXERlc2t0b3BcXElvbmljIFByb2plY3RzXFxuZXdBcHAvc3JjXFxhcHBcXHJlY2lwZXNcXHJlZHRoYWlcXHJlZHRoYWkucGFnZS5zY3NzIiwic3JjL2FwcC9yZWNpcGVzL3JlZHRoYWkvcmVkdGhhaS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBlcy9yZWR0aGFpL3JlZHRoYWkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gICAgaGVpZ2h0OiAxNzVweDtcclxuICAgIHdpZHRoOiAxNzVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufSAvL3NldHMgbG9nbyBzaXplIGFuZCBwb3NpdGlvbiBvbiBzY3JlZW5cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAvL2NlbnRlcnMgdG9vbGJhciBvbiBzY3JlZW5cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn0gLy9jZW50ZXJzIGNhcmRzIGZvciBidXR0b25zIG9uIHNjcmVlblxyXG5cclxuXHJcblxyXG4iLCIubG9nbyB7XG4gIGhlaWdodDogMTc1cHg7XG4gIHdpZHRoOiAxNzVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/recipes/redthai/redthai.page.ts":
/*!*************************************************!*\
  !*** ./src/app/recipes/redthai/redthai.page.ts ***!
  \*************************************************/
/*! exports provided: RedthaiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedthaiPage", function() { return RedthaiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var RedthaiPage = /** @class */ (function () {
    function RedthaiPage(router) {
        this.router = router;
    }
    RedthaiPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    RedthaiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-redthai',
            template: __webpack_require__(/*! raw-loader!./redthai.page.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/redthai/redthai.page.html"),
            styles: [__webpack_require__(/*! ./redthai.page.scss */ "./src/app/recipes/redthai/redthai.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RedthaiPage);
    return RedthaiPage;
}());



/***/ })

}]);
//# sourceMappingURL=recipes-redthai-redthai-module-es5.js.map