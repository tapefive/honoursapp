import { Component, OnInit } from '@angular/core'; //imports Component and OnInit method
import { Router } from '@angular/router'; //imports Router
import { CartService } from 'src/app/services/cart.service' //imports cartService service
import { ModalController, AlertController } from '@ionic/angular'; //imports ModalController and AlertController
import { AngularFirestore } from '@angular/fire/firestore'; //imports Firestore database from Firebase
import { Observable } from 'rxjs'; //imports Observable
import { AuthenticateService } from '../services/authentication.service'; //imports AuthenticateService service

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

    cart = []; //cart variable declared

    selectedProducts = []; //selectedProducts variable declared

    total = 0; //total variable declared

    userEmail: string; //userEmail variable declared

    private products: Observable<any[]>; //products observable declared


    constructor(private firestore: AngularFirestore, private router: Router, private cartService: CartService, private modalCtrl: ModalController, private alertController: AlertController, private authService: AuthenticateService) { }
    //Firestore, CartService, Router, ModalController and AlertController components declared in constructor class

    ngOnInit() {
        
        this.products = this.cartService.getProducts();
        this.cart = this.cartService.getCart();

        this.authService.userDetails();
        this.userEmail = this.authService.userDetails().email;
    }
    //ngOnInit method declares getProducts and getCart methods and initialised from within the CartService

    addToCart(product) {
        this.cartService.addProduct(product);
    }
    //addToCart method declared and initialised from the addProduct method from within the CartService


    remove(product) {
        this.cartService.removeItemFromCart(product);
    }
    //remove method declared and initialised from the removeItemFromCart method from within the CartService

    getTotal(){
        return this.cart.reduce((i, j) => i + j.price * j.amount, 0 );
    }
    //getTotal method declared and the reduce function declares the accumulated result of the array which is the price multipled by the amount

    empty(product) {
        this.cartService.emptyCart(product);
    }
    //remove method declared and initialised from the removeItemFromCart method from within the CartService

    close(){
        this.modalCtrl.dismiss();
    }
    //close method declared and initialised from the modalController

    async cartEmpty() {
        const alert = await this.alertController.create({
          header: 'Cart is now empty!',
          buttons: ['OK']
       });
    
       await alert.present();
       this.modalCtrl.dismiss();
    
    }

    //cartEmpty method declared and displays an alert message to user when all items have been emptied from the cart using the trash button

    async checkout(){
      this.router.navigate(['checkout']);
      this.modalCtrl.dismiss();
    }

    //checkout method declared. Passes user to checkout page from cart modal and closes the cart modal

    async login(){
        this.router.navigate(['login']);
        this.modalCtrl.dismiss();
      }

}


