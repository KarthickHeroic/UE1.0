import { Component } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';
import {Platform } from '@ionic/angular';
import { tap } from 'rxjs/operators';
import { FcmService } from '../services/fcm.service';
import { Router,NavigationExtras  } from '@angular/router';
import { SqlLiteService } from '../services/sql-lite.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
toast:any;
constructor(private fcm: FCM, public plt: Platform, public route: Router, private sqlLite:SqlLiteService, fcmService:FcmService) {
  this.plt.ready()
    .then(() => {
      fcmService.getToken();
     

      this.fcm.onTokenRefresh().subscribe(token => {
        // Register your new token in your back-end if you want
        // backend.registerToken(token);
      });
    });

    this.fcm.onNotification().subscribe(data => { 
      sqlLite.insertKey(data.token);
      if (data.wasTapped) {  
        console.log("Received in background");
        let navigationExtras: NavigationExtras = {            
          state: {
            values: data
          }
        };
        this.route.navigate(['bor'],navigationExtras);
      } else {
        console.log("Received in foreground");
        let navigationExtras: NavigationExtras = {            
          state: {
            values: data
          }
        };
        this.route.navigate(['bor'],navigationExtras);
      };
    });
}


subscribeToTopic() {
  this.fcm.subscribeToTopic('enappd');
}
getToken() {
  this.fcm.getToken().then(token => {
    // Register your new token in your back-end if you want
    // backend.registerToken(token);
  });
}
unsubscribeFromTopic() {
  this.fcm.unsubscribeFromTopic('enappd');
}
}
