import { Component, OnInit } from '@angular/core'; //imports Component and OnInit method
import { AlertController } from '@ionic/angular'; ////imports AlertController
import { Router } from '@angular/router'; //imports Router
import { CartService } from 'src/app/services/cart.service' //imports cartService service
import { AuthenticateService } from '../services/authentication.service'; //imports AuthenticateService service


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  selectedProducts = []; //selectedProducts variable declared

  total = 0; //total variable declared


  constructor(private router: Router, private cartService: CartService, private alertController: AlertController, private authService: AuthenticateService) { }
  
  //CartService, Router and AlertController imports declared in constructor class

  

  ngOnInit() {


      let products = this.cartService.getCart(); //ngOnInit method declares and initialises the getCart method from CartService
      let selected = {};
      for (let obj of products) {
          if (selected[obj.id]) {
              selected[obj.id].count++;
          } else {
              selected[obj.id] = { ...obj, count: 1 };
          }
      }
      this.selectedProducts = Object.keys(selected).map(key => selected[key]);
      this.total = this.selectedProducts.reduce((a, b) => a + (b.count * b.price), 0);
  }
      //iterates the selected products count multiplied by the product price from the cart to display the total amount of items based on product id, name and price


async refreshPage(){

  const alert = await this.alertController.create({
    header: 'Your order is on its way!',
    subHeader: 'Thank you for shopping with Dumfries & Galloway Asian Food Company.',
    
    buttons: [ {

      text: 'Ok',
      handler: () => {

        window.location.replace('products');
      }
    },

  ]
}); await alert.present();

//refreshPage method declared and initialised when pay now button clicked
//Presents alert message to user and when OK is clicked app is refreshed to remove all items from cart. User passed back to products page


}



}


  

