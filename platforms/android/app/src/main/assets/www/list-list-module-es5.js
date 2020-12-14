(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/list/list.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list/list.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  <img src=\"assets/img/dg.png\" class=\"logo\"> <!--Places the DG Asian Food Company Logo at the top of page. Sized and centered using logo tag in CSS-->\n  <ion-title>Shopping List</ion-title> <!--Page Title-->\n</ion-toolbar>\n</ion-header>\n<!--Places the DG Asian Food Company Logo at the top of page. Sized and centered using logo tag in CSS-->\n<ion-buttons slot=\"start\">\n<ion-back-button color=\"danger\" text= \"Home\" defaultHref=\"/home\"></ion-back-button> <!--Back button takes user back to home page when clicked -->\n</ion-buttons>\n\n<ion-button color=\"primary\" fill=\"clear\" class=\"icon\" size=\"large\" (click)=\"navigateToAddShopping();\">\n  <ion-icon name=\"add-circle-outline\"></ion-icon>\n</ion-button>\n\n<!-- Button passes user to add shopping page where they can add items to shopping list. Written to Firebase real time database -->\n    \n<ion-content> <!--Start of content tag-->\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title *ngFor=\"let item of shoppingListRef$ | async\" (click)=selectShoppingItem(item)> <!--ngFor directive subscribes to shopping list item-->\n        <ion-card-content>Name: {{item.itemName}}<br> <!--passes item name to shopping list page-->\n        Amount: {{item.itemNumber}} <!--passes item amount to shopping list page-->\n        </ion-card-content>\n      </ion-card-title>\n    </ion-card-header>\n</ion-card>\n\n       \n</ion-content> <!--End of content tag-->\n\n\n"

/***/ }),

/***/ "./src/app/list/list.module.ts":
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");







var routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]
    }
];
var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/list/list.page.scss":
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  position: relative;\n  text-align: center;\n}\n\nion-row {\n  position: relative;\n  text-align: center;\n}\n\n.logo {\n  height: 175px;\n  width: 175px;\n  position: relative;\n}\n\nion-toolbar {\n  text-align: center;\n}\n\n.buttons {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9DOlxcVXNlcnNcXFRBUEVGSVZFXFxEZXNrdG9wXFxJb25pYyBQcm9qZWN0c1xcbmV3QXBwL3NyY1xcYXBwXFxsaXN0XFxsaXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbGlzdC9saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURJQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbGlzdC9saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAvL2NlbnRlcnMgY2hlY2tvdXQgY2FyZCBvbiBzY3JlZW5cclxuXHJcblxyXG5pb24tcm93IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAvL2NlbnRlcnMgcm93cyBvbiBzY3JlZW5cclxuXHJcblxyXG4ubG9nbyB7XHJcbiAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59IC8vIHNldHMgbG9nbyBzaXplIGFuZCBwb3NpdGlvbiBvbiBzY3JlZW5cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAvLyBjZW50ZXJzIHRvb2xiYXIgb24gc2NyZWVuXHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0gLy8gY2VudGVycyBidXR0b25zIG9uIHNjcmVlblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImlvbi1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1yb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ28ge1xuICBoZWlnaHQ6IDE3NXB4O1xuICB3aWR0aDogMTc1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idXR0b25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/list/list.page.ts":
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");

 //imports component decorator
 //imports Router component
 //imports AngularFireDatabase
 //imports ActionSheetController component
var ListPage = /** @class */ (function () {
    function ListPage(router, database, actionSheetCtrl) {
        this.router = router;
        this.database = database;
        this.actionSheetCtrl = actionSheetCtrl;
        this.shoppingListRef$ = this.database.list('shopping-list').valueChanges();
        ;
    }
    //pointing shopping list ref at firebase and shopping list node. access to everything in node
    ListPage.prototype.selectShoppingItem = function (shoppingItem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            buttons: [
                                {
                                    text: 'Delete Shopping List',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        _this.database.list('shopping-list').remove();
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                        _this.router.navigate(['list']);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent(); //presents Action Sheet
                        return [2 /*return*/];
                }
            });
        });
    };
    //selectShoppingItem method declared and when initialised presents user the option to delete shopping list or can cancel action and return to list. 
    //Items deleted from database as well as interface when trash button clicked
    ListPage.prototype.navigateToAddShopping = function () {
        this.router.navigate(['addshopping']);
    };
    ListPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] }
    ]; };
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=list-list-module-es5.js.map