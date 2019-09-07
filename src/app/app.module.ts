import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Firebase } from '@ionic-native/firebase/ngx';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FcmService } from './services/fcm.service';
import { FCM } from '@ionic-native/fcm/ngx';
import { Device } from '@ionic-native/device/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

const firebaseConfig = {
  apiKey: "AIzaSyChKg41ncBoSGhmsg0BqvjHvJepM_P9png",
  authDomain: "udhayam-9d85a.firebaseapp.com",
  databaseURL: "https://udhayam-9d85a.firebaseio.com",
  projectId: "udhayam-9d85a",
  storageBucket: "udhayam-9d85a.appspot.com",
  messagingSenderId: "809429894513",
  appId: "1:809429894513:web:4190fe3354629b1c"
 }
 

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFirestoreModule,
    ReactiveFormsModule
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    LocalNotifications,
    FCM,
    FcmService,
    Device,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
