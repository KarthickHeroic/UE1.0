import { Component } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';
import { ToastController,Platform } from '@ionic/angular';
import { tap } from 'rxjs/operators';
import { FcmService } from '../services/fcm.service';
import { Router,NavigationExtras  } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
toast:any;
info;
constructor(private fcm: FCM, public plt: Platform, public route: Router) {
  this.plt.ready()
    .then(() => {
      this.fcm.onNotification().subscribe(data => {
        console.log(data);
this.info = {
  name: 'Simon Grimm',
  website: 'www.ionicacademy.com',
  address: {
    zip: 48149,
    city: 'Muenster',
    country: 'DE'
  },
  interests: [
    'Ionic', 'Angular', 'YouTube', 'Sports'
  ]
};  

        if (data.wasTapped) {
         
         
          console.log("Received in background");
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

      this.fcm.onTokenRefresh().subscribe(token => {
        // Register your new token in your back-end if you want
        // backend.registerToken(token);
      });
    })
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
