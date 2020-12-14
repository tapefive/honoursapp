import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2' ;
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth' ;
import { environment } from '../environments/environment';
import { AuthenticateService } from './services/authentication.service';
import firebase from '@firebase/app';
import { ReactiveFormsModule } from '@angular/forms';
import { CartPageModule } from './cart/cart.module';


firebase.initializeApp(environment.firebase);


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule, IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireDatabaseModule, 
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    CartPageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthenticateService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


