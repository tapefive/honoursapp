import { Component, OnInit } from '@angular/core'; //imports Component and OnInit method
import { CartService } from 'src/app/services/cart.service'; //imports cartService service
import { AngularFirestore } from '@angular/fire/firestore'; //imports Firestore database from Firebase
import { Observable } from 'rxjs'; //imports Observable
import { Router } from '@angular/router'; //imports Router
import { ModalController } from '@ionic/angular'; //imports ModalController
import { CartPage } from 'src/app/cart/cart.page'; //imports CartPage class




@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {


  cart = []; //cart variable declared

  private products: Observable<any[]>; //products observable declared

  constructor(private firestore: AngularFirestore, private cartService: CartService, private router: Router, private modalCtrl: ModalController,) 

  //Firestore, CartService, Router and ModalController imports declared in constructor class
  
  {

    this.products = this.firestore.collection<any>('products').valueChanges(); //valueChanges method returns latest values from products collection from within the Firestore database
    }


    ngOnInit() {
        this.products = this.cartService.getProducts();
        this.cart = this.cartService.getCart();
    } //ngOnInit method declares getProducts and getCart methods and initialised from within the CartService

    addToCart(product) {
        this.cartService.addProduct(product);
    } //addToCart method declared and initialised from the addProduct method from within the CartService

    async openCart() {
        let modal = await this.modalCtrl.create({
          component: CartPage,
          cssClass: 'cart-modal'
        });
        modal.present();
    } //openCart method declared and initialises cart modal from cart page when cart icon clicked

    remove(product) {
        this.cartService.removeItemFromCart(product);
    } //remove method declared and initialised from the removeItemFromCart method from within the CartService



}

