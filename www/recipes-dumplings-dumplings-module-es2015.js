(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipes-dumplings-dumplings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/dumplings/dumplings.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/dumplings/dumplings.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  <img src=\"assets/img/dg.png\" class=\"logo\">\n  <ion-title>Pork & Chive Dumplings</ion-title> <!--Page title-->\n</ion-toolbar>\n</ion-header><!--Places the DG Asian Food Company Logo at the top of page. Sized and centered using logo tag in CSS-->\n\n<ion-buttons slot=\"start\">\n<ion-back-button color=\"danger\" defaultHref=\"/recipes\"></ion-back-button> <!--Back button passes user back to Recipes page-->\n</ion-buttons>\n\n<ion-content> <!--Start of content tag-->\n  <div text-center>\n    <img src=\"assets/img/pork.jpg\"> <!--Recipe image-->\n  </div>\n    <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle></ion-card-subtitle>\n          \n          <ion-card-title>Ingredients</ion-card-title> <!--Card title for ingredients-->\n        </ion-card-header>\n      \n        <ion-card-content>\n          <b>Filling</b>\n          <p></p>\n          500g pork mince\n          <p></p>\n          ½ cup finely chopped chives\n          <p></p>\n          ¼ tsp sesame oil\n          <p></p>\n          2 tsp Haitian Premium Wei Ji Xian Soy Sauce\n          <p></p>\n          1 tsp salt\n          <p></p>\n          1 tsp ground black pepper\n          <p></p>\n          1 packet of Imperial Dragon Gyoza Wrappers (Dumpling Skin) 284g\n          <p></p>\n          1 tbsp vegetable oil, to cook dumplings\n          <p></p>\n          2 tbsp cornflour\n          <p></p>\n          <b>Dipping Sauce</b>\n          <p></p>\n          2 tsp rice wine\n          <p></p>\n          1 tsp sesame oil\n          <p></p>\n          1 tsp Haitian Premium Wei Ji Xian Soy Sauce\n          <p></p>\n          1 tsp toasted sesame seeds\n          <p></p>\n          1 tsp dried chilli flakes\n          <p></p>\n        </ion-card-content> \n        <!--Card content shows ingredients required-->\n          \n      </ion-card>\n\n\n      <ion-card>\n          <ion-card-header>\n            \n            <ion-card-title>Method</ion-card-title> <!--Card title for recipe method-->\n          </ion-card-header>\n        \n          <ion-card-content>\n            1. In a large bowl, combine the dumpling filling ingredients and mix well\n            <p></p>\n            2. To wrap dumplings; place half a tablespoon of filling in the centre of each dumpling wrapper\n            <p></p> \n            3. Fold the circle wrapper in half and secure the sides together with a dab of water\n            <p></p>\n            4. Form a base on the dumpling as you stand each dumpling with the seam facing up\n            <p></p> \n            5. Continue filling the wrappers until the pork mince is finished\n            <p></p>\n            6. Lightly dust the dumplings with a little cornflour to ensure the dumplings don’t stick to each other\n            <p></p>\n            7. Heat vegetable oil in a frying pan over medium-high heat\n            <p></p>\n            8. Place dumplings in the pan and cook for 3-4 mins to allow the bottoms to colour\n            <p></p>\n            9. Bring a kettle of water to the boil and reduce heat of the pan with dumplings\n            <p></p>\n            10. <b>CAUTION: Be very careful</b> as you slowly pour the boiling water over the dumplings until the water is ⅓ of the way up the dumplings\n            <p></p>\n            11. Cover the pan with a lid and allow the water to completely evaporate. This will take approximately 7 minutes\n            <p></p>\n            12. Meanwhile, prepare the dipping sauce and set aside\n            <p></p> \n            13. When dumplings are cooked, remove from pan and arrange on a serving plate.\n            <p></p>\n            14. Serve immediately with the dipping sauce\n            <p></p>\n            <ion-card-title color=\"danger\">Serves 4</ion-card-title>\n          </ion-card-content>\n        </ion-card>\n        <!--Card content shows recipe method steps-->\n\n</ion-content> <!--End of content tag-->\n"

/***/ }),

/***/ "./src/app/recipes/dumplings/dumplings.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/recipes/dumplings/dumplings.module.ts ***!
  \*******************************************************/
/*! exports provided: DumplingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DumplingsPageModule", function() { return DumplingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dumplings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dumplings.page */ "./src/app/recipes/dumplings/dumplings.page.ts");







const routes = [
    {
        path: '',
        component: _dumplings_page__WEBPACK_IMPORTED_MODULE_6__["DumplingsPage"]
    }
];
let DumplingsPageModule = class DumplingsPageModule {
};
DumplingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_dumplings_page__WEBPACK_IMPORTED_MODULE_6__["DumplingsPage"]]
    })
], DumplingsPageModule);



/***/ }),

/***/ "./src/app/recipes/dumplings/dumplings.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/recipes/dumplings/dumplings.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  height: 175px;\n  width: 175px;\n  position: relative;\n}\n\nion-toolbar {\n  text-align: center;\n}\n\nion-card {\n  position: relative;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9kdW1wbGluZ3MvQzpcXFVzZXJzXFxUQVBFRklWRVxcRGVza3RvcFxcSW9uaWMgUHJvamVjdHNcXG5ld0FwcC9zcmNcXGFwcFxccmVjaXBlc1xcZHVtcGxpbmdzXFxkdW1wbGluZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9yZWNpcGVzL2R1bXBsaW5ncy9kdW1wbGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvZHVtcGxpbmdzL2R1bXBsaW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XHJcbiAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59IC8vc2V0cyBsb2dvIHNpemUgYW5kIHBvc2l0aW9uIG9uIHNjcmVlblxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59IC8vY2VudGVycyB0b29sYmFyIG9uIHNjcmVlblxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSAvL2NlbnRlcnMgY2FyZHMgZm9yIGJ1dHRvbnMgb24gc2NyZWVuXHJcblxyXG4iLCIubG9nbyB7XG4gIGhlaWdodDogMTc1cHg7XG4gIHdpZHRoOiAxNzVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/recipes/dumplings/dumplings.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/recipes/dumplings/dumplings.page.ts ***!
  \*****************************************************/
/*! exports provided: DumplingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DumplingsPage", function() { return DumplingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let DumplingsPage = class DumplingsPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
DumplingsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DumplingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dumplings',
        template: __webpack_require__(/*! raw-loader!./dumplings.page.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/dumplings/dumplings.page.html"),
        styles: [__webpack_require__(/*! ./dumplings.page.scss */ "./src/app/recipes/dumplings/dumplings.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], DumplingsPage);



/***/ })

}]);
//# sourceMappingURL=recipes-dumplings-dumplings-module-es2015.js.map