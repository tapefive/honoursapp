import { Component } from '@angular/core'; //imports component decorator
import { Router } from '@angular/router'; //imports Router component
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface'; //imports Shopping Item Interface
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'; //imports AngularFireDatabase & AngularFireList

@Component({
  selector: 'app-addshopping',
  templateUrl: './addshopping.page.html',
  styleUrls: ['./addshopping.page.scss'],
})
export class AddshoppingPage {

  shoppingItem = {} as ShoppingItem; //shoppingItem variable declared

  shoppingItemRef$: AngularFireList<any>; //shoppingListRef$ observable declared

  constructor(private router: Router, private database : AngularFireDatabase)
  
  //Router & AngularFireDatabase components declared in constructor class
  
  { this.shoppingItemRef$ = this.database.list('shopping-list'); }

  addShoppingItem(shoppingItem: ShoppingItem) {

    //create a new anonymous object and converts itemNumber string to a number

    //push this to Firebase database under 'shopping-list' node
    

    this.shoppingItemRef$.push({

      itemName: this.shoppingItem.itemName,

      itemNumber: Number(this.shoppingItem.itemNumber)});

      this.shoppingItem = {} as ShoppingItem; 


  }

  //addShoppingItem method declared and when initialised writes the item number and name to the Firbase Real Time database

  

}


