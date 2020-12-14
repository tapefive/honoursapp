(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addshopping-addshopping-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addshopping/addshopping.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addshopping/addshopping.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  <img src=\"assets/img/dg.png\" class=\"logo\">\n  <ion-title>Add Shopping</ion-title>\n</ion-toolbar>\n</ion-header>\n<!--Places the DG Asian Food Company Logo at the top of page. Sized and centered using logo tag in CSS-->\n<ion-buttons slot=\"start\">\n<ion-back-button color=\"danger\" defaultHref=\"/list\"></ion-back-button>\n</ion-buttons>\n<!--Back button takes user back to list page when clicked -->\n\n<ion-content> <!--Start of content tag-->\n\n   <ion-item>\n      <ion-label position=\"floating\" >Item Name:</ion-label> <!--Label for item name-->\n      <ion-input type=\"text\" autocapitalize=\"words\" [(ngModel)]=\"shoppingItem.itemName\"></ion-input> <!--Creates a Text FormControl instance from shopping item model and binds it to shopping item name-->\n   </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Quantity:</ion-label> <!--Label for item quantity-->\n      <ion-input type=\"number\" [(ngModel)]=\"shoppingItem.itemNumber\"></ion-input> <!--Creates a Number FormControl instance from shopping item model and binds it to shopping item quantity-->\n    </ion-item>\n  \n  <div class=\"buttons\">\n    <ion-button *ngIf=\"shoppingItem.itemName && shoppingItem.itemNumber \"color=\"primary\" shape=\"round\"  (click)=\"addShoppingItem(shoppingItem);\" routerLink=\"/list\" routerDirection=\"backward\">Add Item</ion-button>\n  </div>\n  <!--Add item button only shown if both fields have data. addShoppingItem method initialised on click. User passed back to shopping list page when item added to list-->\n\n</ion-content> <!--End of content tag-->"

/***/ }),

/***/ "./src/app/addshopping/addshopping.module.ts":
/*!***************************************************!*\
  !*** ./src/app/addshopping/addshopping.module.ts ***!
  \***************************************************/
/*! exports provided: AddshoppingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddshoppingPageModule", function() { return AddshoppingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addshopping_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addshopping.page */ "./src/app/addshopping/addshopping.page.ts");







const routes = [
    {
        path: '',
        component: _addshopping_page__WEBPACK_IMPORTED_MODULE_6__["AddshoppingPage"]
    }
];
let AddshoppingPageModule = class AddshoppingPageModule {
};
AddshoppingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_addshopping_page__WEBPACK_IMPORTED_MODULE_6__["AddshoppingPage"]]
    })
], AddshoppingPageModule);



/***/ }),

/***/ "./src/app/addshopping/addshopping.page.scss":
/*!***************************************************!*\
  !*** ./src/app/addshopping/addshopping.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.logo {\n  height: 175px;\n  width: 175px;\n  position: relative;\n}\n\nion-toolbar {\n  text-align: center;\n}\n\n.buttons {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkc2hvcHBpbmcvQzpcXFVzZXJzXFxUQVBFRklWRVxcRGVza3RvcFxcSW9uaWMgUHJvamVjdHNcXG5ld0FwcC9zcmNcXGFwcFxcYWRkc2hvcHBpbmdcXGFkZHNob3BwaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkc2hvcHBpbmcvYWRkc2hvcHBpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREdBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hZGRzaG9wcGluZy9hZGRzaG9wcGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0gLy9jZW50ZXJzIGNoZWNrb3V0IGNhcmQgb24gc2NyZWVuXHJcblxyXG5cclxuLmxvZ28ge1xyXG4gICAgaGVpZ2h0OiAxNzVweDtcclxuICAgIHdpZHRoOiAxNzVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufSAvLyBzZXRzIGxvZ28gc2l6ZSBhbmQgcG9zaXRpb24gb24gc2NyZWVuXHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0gLy8gY2VudGVycyB0b29sYmFyIG9uIHNjcmVlblxyXG5cclxuLmJ1dHRvbnMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59IC8vIGNlbnRlcnMgYnV0dG9ucyBvbiBzY3JlZW5cclxuXHJcblxyXG5cclxuXHJcbiIsImlvbi1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dvIHtcbiAgaGVpZ2h0OiAxNzVweDtcbiAgd2lkdGg6IDE3NXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnV0dG9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/addshopping/addshopping.page.ts":
/*!*************************************************!*\
  !*** ./src/app/addshopping/addshopping.page.ts ***!
  \*************************************************/
/*! exports provided: AddshoppingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddshoppingPage", function() { return AddshoppingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);

 //imports component decorator
 //imports Router component
 //imports AngularFireDatabase & AngularFireList
let AddshoppingPage = class AddshoppingPage {
    constructor(router, database) {
        this.router = router;
        this.database = database;
        this.shoppingItem = {}; //shoppingItem variable declared
        this.shoppingItemRef$ = this.database.list('shopping-list');
    }
    addShoppingItem(shoppingItem) {
        //create a new anonymous object and converts itemNumber string to a number
        //push this to Firebase database under 'shopping-list' node
        this.shoppingItemRef$.push({
            itemName: this.shoppingItem.itemName,
            itemNumber: Number(this.shoppingItem.itemNumber)
        });
        this.shoppingItem = {};
    }
};
AddshoppingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
];
AddshoppingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addshopping',
        template: __webpack_require__(/*! raw-loader!./addshopping.page.html */ "./node_modules/raw-loader/index.js!./src/app/addshopping/addshopping.page.html"),
        styles: [__webpack_require__(/*! ./addshopping.page.scss */ "./src/app/addshopping/addshopping.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
], AddshoppingPage);



/***/ })

}]);
//# sourceMappingURL=addshopping-addshopping-module-es2015.js.map