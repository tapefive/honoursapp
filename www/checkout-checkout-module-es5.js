(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/checkout/checkout.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <img src=\"assets/img/dg.png\" class=\"logo\"> <!--Places the DG Asian Food Company Logo at the top of page. Sized and centered using logo tag in CSS-->\n      <ion-title>Checkout</ion-title> <!--Page Title-->\n  </ion-toolbar>\n</ion-header>\n<ion-buttons slot=\"start\">\n  <ion-back-button color=\"danger\" defaultHref=\"/products\"></ion-back-button> <!--Red back button takes user back to products when clicked -->\n</ion-buttons>\n\n<ion-content> <!--Starts content tag-->\n\n  <ion-list>\n      <ion-item *ngFor=\"let item of selectedProducts\" lines=\"inset\"> <!--ngFor directive subscribes to selected products as item in cart-->\n          {{ item.count }} x {{ item.name }} - {{ item.price | currency: 'GBP' : 'symbol' }} <!--passes amount (count) of products added to cart calculated in the CheckoutPage.ts file, -->\n                                                                                              <!--product name and product price in £ currency-->\n          <ion-label slot=\"end\" text-right>{{ (item.price * item.count) | currency: 'GBP' : 'symbol' }}</ion-label> <!--passes product price multiplied by count. Uses the £ currency pipe-->\n      </ion-item>\n      <ion-item>\n          Order Total: <span slot=\"end\">{{ total | currency: 'GBP' : 'symbol' }}</span> <!--passes cart total in £ currency to the checkout page-->\n      </ion-item>\n  </ion-list>\n\n  <ion-button expand=\"block\" (click)=\"refreshPage();\"> <!--Pay Now button refreshPage method initilaised on click-->\n    Pay Now\n  </ion-button>\n\n</ion-content> <!--Ends content tag-->"

/***/ }),

/***/ "./src/app/checkout/checkout.module.ts":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "./src/app/checkout/checkout.page.ts");







var routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]
    }
];
var CheckoutPageModule = /** @class */ (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.page.scss":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  height: 175px;\n  width: 175px;\n  position: relative;\n}\n\nion-toolbar {\n  text-align: center;\n}\n\nion-card {\n  position: relative;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvQzpcXFVzZXJzXFxUQVBFRklWRVxcRGVza3RvcFxcSW9uaWMgUHJvamVjdHNcXG5ld0FwcC9zcmNcXGFwcFxcY2hlY2tvdXRcXGNoZWNrb3V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURJQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICAgIGhlaWdodDogMTc1cHg7XHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn0gLy8gc2V0cyBsb2dvIHNpemUgYW5kIHBvc2l0aW9uIG9uIHNjcmVlblxyXG5cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAvLyBjZW50ZXJzIHRvb2xiYXIgb24gc2NyZWVuXHJcblxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59IC8vY2VudGVycyBjaGVja291dCBjYXJkIG9uIHNjcmVlblxyXG4iLCIubG9nbyB7XG4gIGhlaWdodDogMTc1cHg7XG4gIHdpZHRoOiAxNzVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/checkout/checkout.page.ts":
/*!*******************************************!*\
  !*** ./src/app/checkout/checkout.page.ts ***!
  \*******************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");

 //imports Component and OnInit method
 ////imports AlertController
 //imports Router
 //imports cartService service
 //imports AuthenticateService service
var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(router, cartService, alertController, authService) {
        this.router = router;
        this.cartService = cartService;
        this.alertController = alertController;
        this.authService = authService;
        this.selectedProducts = []; //selectedProducts variable declared
        this.total = 0; //total variable declared
    }
    //CartService, Router and AlertController imports declared in constructor class
    CheckoutPage.prototype.ngOnInit = function () {
        var products = this.cartService.getCart(); //ngOnInit method declares and initialises the getCart method from CartService
        var selected = {};
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var obj = products_1[_i];
            if (selected[obj.id]) {
                selected[obj.id].count++;
            }
            else {
                selected[obj.id] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, obj, { count: 1 });
            }
        }
        this.selectedProducts = Object.keys(selected).map(function (key) { return selected[key]; });
        this.total = this.selectedProducts.reduce(function (a, b) { return a + (b.count * b.price); }, 0);
    };
    //iterates the selected products count multiplied by the product price from the cart to display the total amount of items based on product id, name and price
    CheckoutPage.prototype.refreshPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Your order is on its way!',
                            subHeader: 'Thank you for shopping with Dumfries & Galloway Asian Food Company.',
                            buttons: [{
                                    text: 'Ok',
                                    handler: function () {
                                        window.location.replace('products');
                                    }
                                },
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckoutPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"] }
    ]; };
    CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! raw-loader!./checkout.page.html */ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.page.html"),
            styles: [__webpack_require__(/*! ./checkout.page.scss */ "./src/app/checkout/checkout.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"]])
    ], CheckoutPage);
    return CheckoutPage;
}());



/***/ })

}]);
//# sourceMappingURL=checkout-checkout-module-es5.js.map