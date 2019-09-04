import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SqlLiteService } from './services/sql-lite.service';
import { FcmService } from './services/fcm.service';
import { Router, NavigationExtras } from '@angular/router';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'BOR',
      url: '/bor',
      icon: 'notifications'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private sqlLite: SqlLiteService,
    private fcmService:FcmService,
    public route: Router,
    public fcm:FCM
    
  

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.sqlLite.createDB();

      // this.fcm.onNotification().subscribe(data => {
      //   console.log(data);
      //   if (data.wasTapped) {         
         
      //     console.log("Received in background");
      //     let navigationExtras: NavigationExtras = {            
      //       state: {
      //         values: data
      //       }
      //     };
      //     this.route.navigate(['bor'],navigationExtras);
      //   } else {
      //     console.log("Received in foreground");
      //     let navigationExtras: NavigationExtras = {            
      //       state: {
      //         values: data
      //       }
      //     };
      //     this.route.navigate(['bor'],navigationExtras);
      //   };
      // });

     
      
    });
  }
}
