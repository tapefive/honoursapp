import { Injectable } from '@angular/core'; //imports Injectable
import { AngularFirestore } from '@angular/fire/firestore'; //imports Firestore database
import { Observable } from 'rxjs'; //imports Observable




@Injectable({
    providedIn: 'root'
})
export class CartService { //start of CartService class

    private products: Observable<any[]>; //products observable declared


    private cart = []; //cart variable declared


    constructor(private firestore: AngularFirestore, ) //Firestore import declared in constructor class
    
    {

        this.products = this.firestore.collection<any>('products').valueChanges(); //valueChanges method returns latest values from products collection from within the Firestore database
    }

    getProducts() {
        return this.products;
    } //getProducts method declared and returns products when initialised


    getCart() {
        return this.cart;
    } //getCart method declared and returns products when initialised

    addProduct(product) {
        this.cart.push(product);
    } //addProduct method adds product to cart when cart when initialised

    removeItemFromCart(product) {
        let index = this.cart.indexOf(product);

        if (index > -1) {
            this.cart.splice(index, 1);
        }
    } //removeItemFromCart method removes 1 item from cart when initialised

    emptyCart(product) {
        let index = this.cart.indexOf(product);

        if (index > -1) {
            this.cart.splice(product);
        }
    } //emptyCart method removes all items from cart when initialsied

} //end of CartService class









