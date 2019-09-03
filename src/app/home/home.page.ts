import { Component } from '@angular/core';

import { ToastController,Platform } from '@ionic/angular';
import { tap } from 'rxjs/operators';
import { FcmService } from '../services/fcm.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
toast:any;
  constructor(platform: Platform, fcm: FcmService, toastCtrl: ToastController) {
    platform.ready().then(() => {


      // Get a FCM token
      fcm.getToken()
debugger;
      // Listen to incoming messages
      fcm.listenToNotifications().pipe(
        tap(msg => {
          // show a toast
          this.toast = toastCtrl.create({
            message: msg.body,
            duration: 3000
          }).then((toastp) => {
            toastp.present();
          });
        })
      )    
    });    
  }
}
