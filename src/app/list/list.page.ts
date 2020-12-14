import { Component} from '@angular/core'; //imports component decorator
import { Router } from '@angular/router'; //imports Router component
import { AngularFireDatabase } from 'angularfire2/database'; //imports AngularFireDatabase
import { Observable } from 'rxjs'; //imports Observable component
import { ActionSheetController } from '@ionic/angular'; //imports ActionSheetController component
import { ShoppingItem } from 'src/models/shopping-item/shopping-item.interface'; //imports Shopping Item Interface



@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {

  shoppingListRef$: Observable<any[]>; //shoppingListRef$ observable declared

  constructor(private router: Router, private database : AngularFireDatabase, private actionSheetCtrl: ActionSheetController) 
  
  //Router, AngularFireDatabase & ActionSheetController components declared in constructor class
  
  { 
    this.shoppingListRef$ = this.database.list('shopping-list').valueChanges();; 
  }

  //pointing shopping list ref at firebase and shopping list node. access to everything in node

  async selectShoppingItem(shoppingItem: ShoppingItem){


    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Delete Shopping List',
          role: 'destructive',
          icon: 'trash',
          handler: () => { 

            this.database.list('shopping-list').remove();


          }
        },

        {

        text: 'Cancel',
        role: 'cancel',
        handler: () => {

          this.router.navigate(['list']);
          
        }

        }
      ]
    }); await actionSheet.present(); //presents Action Sheet

  }

  //selectShoppingItem method declared and when initialised presents user the option to delete shopping list or can cancel action and return to list. 
  //Items deleted from database as well as interface when trash button clicked

  navigateToAddShopping(){
    
    this.router.navigate(['addshopping']);
  }

  //navigates user to add shopping page

}
