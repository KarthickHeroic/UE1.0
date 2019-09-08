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
      title: 'List',
      url: '/list',
      icon: 'list',

    },
    {
      title: 'BOR',
      url: '/bor',
      icon: 'notifications',

    },
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
    public storage: Storage
    
  

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
