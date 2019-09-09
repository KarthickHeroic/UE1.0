import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FcmService } from './services/fcm.service';
import { Router, NavigationExtras } from '@angular/router';
import { FCM } from '@ionic-native/fcm/ngx';
import { Storage } from '@ionic/storage';

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
      icon: 'home',

    },
    {
      title: 'BOR',
      url: '/list',
      icon: 'notifications',

    },
    // {
    //   title: 'BOR',
    //   url: '/bor',
    //   icon: 'notifications',

    // },
    {
      title:'Logout',
      icon:'log-out',
      url:'',

    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcmService:FcmService,
    public route: Router,
    public fcm:FCM,
    public storage: Storage,
    private localNotifications: LocalNotifications,    
  

  ) {
    this.initializeApp();
    
    storage.get('Status').then((val) => {
      if (val == 'login') {
        this.route.navigate(['home'])
      }
      else if (val == 'logout'){
        this.route.navigate(['login'])
      }
    });
    
    this.fcm.onNotification().subscribe(data => { 
      this.localNotifications.on('click').subscribe((notification) => {
      let navigationExtras: NavigationExtras = {            
          state: {
            values: data.token
          }
        };
        storage.get('Status').then((val) => {
          if (val == 'login') {
        this.route.navigate(['list'],navigationExtras);
          }
          else
          {
            this.route.navigate(['login'],navigationExtras);
          }
        })
      
    });
      if (data.wasTapped) {  
        console.log("Received in background");
        let navigationExtras: NavigationExtras = {            
          state: {
            values: data.token
          }
        };
        storage.get('Status').then((val) => {
          if (val == 'login') {
        this.route.navigate(['bor'],navigationExtras);
          }
          else
          {
            this.route.navigate(['login'],navigationExtras);
          }
        })
      } else {
        console.log("Received in foreground");
        const customer = data.custName + " from " + data.siteName
        this.localNotifications.schedule({
            title:'Block OverRide Alart',
            text: `${customer} amount is Full!`,
            icon:'',           
        });
        
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  exit(p){  
   if(p.title=="Logout"){     
     this.storage.set('Status','logout');
     this.route.navigate(['login'])
   }
  }
}
