(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n    <img src=\"assets/img/dg.png\" class=\"logo\"> <!--Places the DG Asian Food Company Logo at the top of page. Sized and centered using logo tag in CSS-->\n    <ion-title>Products</ion-title> <!--Page Title-->\n  </ion-toolbar>\n</ion-header>\n\n<ion-buttons slot=\"start\">\n  <ion-back-button color=\"danger\" text= \"Home\" defaultHref=\"/home\"></ion-back-button>\n</ion-buttons> <!--Red back button takes user back to home when clicked -->\n\n<ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button *ngIf=\"cart.length > 0\" (click)=\"openCart()\"><!--openCart method declared-->\n      <ion-badge>{{ cart.length }}</ion-badge>\n      <ion-icon name=\"cart\" size=\"large\"></ion-icon>\n  </ion-fab-button>\n</ion-fab> <!--Cart icon and button placed in top left of screen. Number of items in cart only displayed if cart total is greater than 1-->\n            <!-- When cart icon clicked, user passed to cart model-->\n\n\n\n<ion-content>\n<!--ngContainer opened for first product card-->\n  <ng-container *ngFor=\"let p of products | async\"> <!--ngFor directive and async pipe subscribes to products observable-->\n      <ion-card *ngIf=\"p.id == 1\"> <!--ngIf directive card only displays product information when relevant product id is declared-->\n          <ion-card-header>\n              <img src=\"assets/img/wrappers.jpg\" class=\"image\"> <!--image path sets different product image for each product id-->\n              <ion-card-title>{{p.name}}</ion-card-title> <!--passes product name to the cart title from Firestore-->\n              <ion-card-subtitle>Price: £{{p.price}}</ion-card-subtitle><!--passes product price to the cart subtitle from Firestore-->\n              <ion-button fill=\"clear\" (click)=\"addToCart(p)\"><!--addToCart method initialised on click and product with id 1 added to cart-->\n                  <ion-icon name=\"add\"></ion-icon> <!--displays add icon-->\n              </ion-button>\n          </ion-card-header>\n      </ion-card><!--closes product card-->\n  </ng-container><!--closes ngContainer-->\n\n  <ng-container *ngFor=\"let p of products | async\"> <!--Code exactly the same for other 19 products' functionality and appearance, all that is different is the product id and image path -->\n      <ion-card *ngIf=\"p.id == 2\">\n          <ion-card-header>\n              <img src=\"assets/img/duck.jpg\" class=\"image\">\n              <ion-card-title>{{p.name}}</ion-card-title>\n              <ion-card-subtitle>Price: £{{p.price}}</ion-card-subtitle>\n              <ion-button fill=\"clear\" (click)=\"addToCart(p)\">\n                  <ion-icon name=\"add\"></ion-icon>\n              </ion-button>\n          </ion-card-header>\n      </ion-card>\n  </ng-container>\n\n  <ng-container *ngFor=\"let p of products | async\">\n      <ion-card *ngIf=\"p.id == 3\">\n          <ion-card-header>\n              <img src=\"assets/img/dimsum.jpg\" class=\"image\">\n              <ion-card-title>{{p.name}}</ion-card-title>\n              <ion-card-subtitle>Price: £{{p.price}}</ion-card-subtitle>\n              <ion-button fill=\"clear\" (click)=\"addToCart(p)\">\n                  <ion-icon name=\"add\"></ion-icon>\n              </ion-button>\n          </ion-card-header>\n      </ion-card>\n  </ng-container>\n\n  <ng-container *ngFor=\"let p of products | async\">\n      <ion-card *ngIf=\"p.id == 4\">\n          <ion-card-header>\n              <img src=\"assets/img/prawn.jpg\" class=\"image\">\n              <ion-card-title>{{p.name}}</ion-card-title>\n              <ion-card-subtitle>Price: £{{p.price}}</ion-card-subtitle>\n              <ion-button fill=\"clear\" (click)=\"addToCart(p)\">\n                  <ion-icon name=\"add\"></ion-icon>\n              </ion-button>\n          </ion-card-header>\n      </ion-card>\n  </ng-container>\n\n  <ng-container *ngFor=\"let p of products | async\">\n      <ion-card *ngIf=\"p.id == 5\">\n          <ion-card-header>\n              <img src=\"assets/img/mandu.jpg\" class=\"image\">\n              <ion-card-title>{{p.name}}</ion-card-title>\n              <ion-card-subtitle>Price: £{{p.price}}</ion-card-subtitle>\n              <ion-button fill=\"clear\" (click)=\"addToCart(p)\">\n                  <ion-icon name=\"add\"></ion-icon>\n              </ion-button>\n          </ion-card-header>\n      </ion-card>\n  </ng-container>\n\n  <ng-container *ngFor=\"let p of products | async\">\n      <ion-card *ngIf=\"p.id == 6\">\n          <ion-card-header>\n              <img src=\"assets/img/coriander.jpg\" class=\"image\">\n              <ion-card-title>{{p.name}}</ion-card-title>\n              <ion-card-subtitle>Price: £{{p.price}}</ion-card-subtitle>\n              <ion-button fill=\"clear\" (click)=\"addToCart(p)\">\n                  <ion-icon name=\"add\"></ion-icon>\n              </ion-button>\n          </ion-card-header>\n      </ion-card>\n  </ng-container>\n\n  <ng-container *ngFor=\"let p of products | async\">\n      <ion-card *ngIf=\"p.id == 7\">\n          <ion-card-header>\n              <img src=\"assets/img/dill.jpg\" class=\"image\">\n              <ion-card-title>{{p.name}}</ion-card-title>\n              <ion-card-subtitle>Price: £{{p.price}}</ion-card-subtitle>\n              <ion-button fill=\"clear\" (click)=\"addToCart(p)\">\n                  <ion-icon name=\"add\"></ion-icon>\n              </ion-button>\n          </ion-card-header>\n      </ion-card>\n  </ng-container>\n\n  <ng-container *ngFor=\"let p of products | async\">\n      <ion-card *ngIf=\"p.id == 8\">\n          <ion-card-header>\n              <img src=\"assets/img/chive.jpg\" class=\"image\">\n              <ion-card-title>{{p.name}}</ion-card-title>\n              <ion-card-subtitle>Price: £{{p.price}}</ion-card-subtitle>\n              <ion-button fill=\"clear\" (click)=\"addToCart(p)\">\n                  <ion-icon name=\"add\"></ion-icon>\n              </ion-button>\n          </ion-card-header>\n      </ion-card>\n  </ng-container>\n\n  <ng-container *ngFor=\"let p of products | async\">\n    <ion-card *ngIf=\"p.id == 9\">\n        <ion-card-header>\n            <img src=\"assets/img/hp.jpg\" class=\"image\">\n            <ion-card-title>{{p.name}}</ion-card-title>\n            <ion-card-subtitle>Price: £{{p.price}}</ion-card-subtitle>\n            <ion-button fill=\"clear\" (click)=\"addToCart(p)\">\n                <ion-icon name=\"add\"></ion-icon>\n            </ion-button>\n        </ion-card-header>\n    </ion-card>\n</ng-container>\n\n<ng-container *ngFor=\"let p of products | async\">\n    <ion-card *ngIf=\"p.id == 10\">\n        <ion-card-header>\n            <img src=\"assets/img/teans.jpg\" class=\"image\">\n            <ion-card-title>{{p.name}}</ion-card-title>\n            <ion-card-subtitle>Price: £{{p.price}}</ion-card-subtitle>\n            <ion-button fill=\"clear\" (click)=\"addToCart(p)\">\n                <ion-icon name=\"add\"></ion-icon>\n            </ion-button>\n        </ion-card-header>\n    </ion-card>\n</ng-container>\n\n<ng-container *ngFor=\"let p of products | async\">\n    <ion-card *ngIf=\"p.id == 11\">\n        <ion-card-header>\n            <img src=\"assets/img/mpg.jpg\" class=\"image\">\n            <ion-card-title>{{p.name}}</ion-card-title>\n            <ion-card-subtitle>Price: £{{p.price}}</ion-card-subtitle>\n            <ion-button fill=\"clear\" (click)=\"addToCart(p)\">\n                <ion-icon name=\"add\"></ion-icon>\n            </ion-button>\n        </ion-card-header>\n    </ion-card>\n</ng-container>\n\n<ng-container *ngFor=\"let p of products | async\">\n    <ion-card *ngIf=\"p.id == 12\">\n        <ion-card-header>\n            <img src=\"assets/img/mpr.jpg\" class=\"image\">\n            <ion-card-title>{{p.name}}</ion-card-title>\n            <ion-card-subtitle>Price: £{{p.price}}</ion-card-subtitle>\n            <ion-button fill=\"clear\" (click)=\"addToCart(p)\">\n                <ion-icon name=\"add\"></ion-icon>\n            </ion-button>\n        </ion-card-header>\n    </ion-card>\n</ng-container>\n\n<ng-container *ngFor=\"let p of products | async\">\n    <ion-card *ngIf=\"p.id == 13\">\n        <ion-card-header>\n            <img src=\"assets/img/tcp.jpg\" class=\"image\">\n            <ion-card-title>{{p.name}}</ion-card-title>\n            <ion-card-subtitle>Price: £{{p.price}}</ion-card-subtitle>\n            <ion-button fill=\"clear\" (click)=\"addToCart(p)\">\n                <ion-icon name=\"add\"></ion-icon>\n            </ion-button>\n        </ion-card-header>\n    </ion-card>\n</ng-container>\n\n<ng-container *ngFor=\"let p of products | async\">\n  <ion-card *ngIf=\"p.id == 14\">\n      <ion-card-header>\n          <img src=\"assets/img/sri.jpg\" class=\"image\">\n          <ion-card-title>{{p.name}}</ion-card-title>\n          <ion-card-subtitle>Price: £{{p.price}}</ion-card-subtitle>\n          <ion-button fill=\"clear\" (click)=\"addToCart(p)\">\n              <ion-icon name=\"add\"></ion-icon>\n          </ion-button>\n      </ion-card-header>\n  </ion-card>\n</ng-container>\n\n<ng-container *ngFor=\"let p of products | async\">\n  <ion-card *ngIf=\"p.id == 15\">\n      <ion-card-header>\n          <img src=\"assets/img/hoi.jpg\" class=\"image\">\n          <ion-card-title>{{p.name}}</ion-card-title>\n          <ion-card-subtitle>Price: £{{p.price}}</ion-card-subtitle>\n          <ion-button fill=\"clear\" (click)=\"addToCart(p)\">\n              <ion-icon name=\"add\"></ion-icon>\n          </ion-button>\n      </ion-card-header>\n  </ion-card>\n</ng-container>\n\n<ng-container *ngFor=\"let p of products | async\">\n  <ion-card *ngIf=\"p.id == 16\">\n      <ion-card-header>\n          <img src=\"assets/img/jimmy.jpg\" class=\"image\">\n          <ion-card-title>{{p.name}}</ion-card-title>\n          <ion-card-subtitle>Price: £{{p.price}}</ion-card-subtitle>\n          <ion-button fill=\"clear\" (click)=\"addToCart(p)\">\n              <ion-icon name=\"add\"></ion-icon>\n          </ion-button>\n      </ion-card-header>\n  </ion-card>\n</ng-container>\n\n<ng-container *ngFor=\"let p of products | async\">\n  <ion-card *ngIf=\"p.id == 17\">\n      <ion-card-header>\n          <img src=\"assets/img/plum.jpg\" class=\"image\">\n          <ion-card-title>{{p.name}}</ion-card-title>\n          <ion-card-subtitle>Price: £{{p.price}}</ion-card-subtitle>\n          <ion-button fill=\"clear\" (click)=\"addToCart(p)\">\n              <ion-icon name=\"add\"></ion-icon>\n          </ion-button>\n      </ion-card-header>\n  </ion-card>\n</ng-container>\n\n<ng-container *ngFor=\"let p of products | async\">\n  <ion-card *ngIf=\"p.id == 18\">\n      <ion-card-header>\n          <img src=\"assets/img/coco.jpg\" class=\"image\">\n          <ion-card-title>{{p.name}}</ion-card-title>\n          <ion-card-subtitle>Price: £{{p.price}}</ion-card-subtitle>\n          <ion-button fill=\"clear\" (click)=\"addToCart(p)\">\n              <ion-icon name=\"add\"></ion-icon>\n          </ion-button>\n      </ion-card-header>\n  </ion-card>\n</ng-container>\n\n<ng-container *ngFor=\"let p of products | async\">\n  <ion-card *ngIf=\"p.id == 19\">\n      <ion-card-header>\n          <img src=\"assets/img/thai.jpg\" class=\"image\">\n          <ion-card-title>{{p.name}}</ion-card-title>\n          <ion-card-subtitle>Price: £{{p.price}}</ion-card-subtitle>\n          <ion-button fill=\"clear\" (click)=\"addToCart(p)\">\n              <ion-icon name=\"add\"></ion-icon>\n          </ion-button>\n      </ion-card-header>\n  </ion-card>\n</ng-container>\n\n<ng-container *ngFor=\"let p of products | async\">\n  <ion-card *ngIf=\"p.id == 20\">\n      <ion-card-header>\n          <img src=\"assets/img/soy.jpg\" class=\"image\">\n          <ion-card-title>{{p.name}}</ion-card-title>\n          <ion-card-subtitle>Price: £{{p.price}}</ion-card-subtitle>\n          <ion-button fill=\"clear\" (click)=\"addToCart(p)\">\n              <ion-icon name=\"add\"></ion-icon>\n          </ion-button>\n      </ion-card-header>\n  </ion-card>\n</ng-container>\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.page */ "./src/app/products/products.page.ts");







const routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]
    }
];
let ProductsPageModule = class ProductsPageModule {
};
ProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]]
    })
], ProductsPageModule);



/***/ }),

/***/ "./src/app/products/products.page.scss":
/*!*********************************************!*\
  !*** ./src/app/products/products.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  height: 175px;\n  width: 175px;\n  position: relative;\n}\n\nion-toolbar {\n  text-align: center;\n}\n\nion-card {\n  position: relative;\n  text-align: center;\n}\n\n.image {\n  height: 175px;\n  width: 175px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-fab-button {\n  height: 70px;\n  width: 70px;\n}\n\n.cart-icon {\n  font-size: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvQzpcXFVzZXJzXFxUQVBFRklWRVxcRGVza3RvcFxcSW9uaWMgUHJvamVjdHNcXG5ld0FwcC9zcmNcXGFwcFxccHJvZHVjdHNcXHByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUVJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDREo7O0FES0E7RUFDSSxlQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XHJcbiAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59IC8vIHNldHMgbG9nbyBzaXplIGFuZCBwb3NpdGlvbiBvbiBzY3JlZW5cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAvLyBjZW50ZXJzIHRvb2xiYXIgb24gc2NyZWVuXHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0gLy8gY2VudGVycyBjYXJkcyBmb3IgYnV0dG9ucyBvbiBzY3JlZW5cclxuXHJcbi5pbWFnZSB7XHJcblxyXG4gICAgaGVpZ2h0OiAxNzVweDtcclxuICAgIHdpZHRoOiAxNzVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblxyXG59IC8vIHNldHMgcHJvZHVjdCBpbWFnZSBzaXplIGFuZCBzZXRzIHBvc2l0aW9uIGFzIGNlbnRlcmVkXHJcblxyXG5pb24tZmFiLWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxufSAvLyBzZXRzIHNpemUgb2YgY2FydCBidXR0b25cclxuXHJcblxyXG4uY2FydC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxufSAvL3NldHMgc2l6ZSBvZiBmb250IHdpdGhpbiBjYXJ0IiwiLmxvZ28ge1xuICBoZWlnaHQ6IDE3NXB4O1xuICB3aWR0aDogMTc1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZSB7XG4gIGhlaWdodDogMTc1cHg7XG4gIHdpZHRoOiAxNzVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogNzBweDtcbn1cblxuLmNhcnQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/products/products.page.ts":
/*!*******************************************!*\
  !*** ./src/app/products/products.page.ts ***!
  \*******************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_cart_cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/cart/cart.page */ "./src/app/cart/cart.page.ts");

 //imports Component and OnInit method
 //imports cartService service
 //imports Firestore database from Firebase
 //imports Router
 //imports ModalController
 //imports CartPage class
let ProductsPage = class ProductsPage {
    constructor(firestore, cartService, router, modalCtrl) {
        this.firestore = firestore;
        this.cartService = cartService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.cart = []; //cart variable declared
        this.products = this.firestore.collection('products').valueChanges(); //valueChanges method returns latest values from products collection from within the Firestore database
    }
    ngOnInit() {
        this.products = this.cartService.getProducts();
        this.cart = this.cartService.getCart();
    } //ngOnInit method declares getProducts and getCart methods and initialised from within the CartService
    addToCart(product) {
        this.cartService.addProduct(product);
    } //addToCart method declared and initialised from the addProduct method from within the CartService
    openCart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_cart_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"],
                cssClass: 'cart-modal'
            });
            modal.present();
        });
    } //openCart method declared and initialises cart modal from cart page when cart icon clicked
    remove(product) {
        this.cartService.removeItemFromCart(product);
    } //remove method declared and initialised from the removeItemFromCart method from within the CartService
};
ProductsPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: __webpack_require__(/*! raw-loader!./products.page.html */ "./node_modules/raw-loader/index.js!./src/app/products/products.page.html"),
        styles: [__webpack_require__(/*! ./products.page.scss */ "./src/app/products/products.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
], ProductsPage);



/***/ })

}]);
//# sourceMappingURL=products-products-module-es2015.js.map