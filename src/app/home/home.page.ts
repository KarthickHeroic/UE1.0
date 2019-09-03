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

  constructor(platform: Platform, fcm: FcmService, toastCtrl: ToastController) {
    platform.ready().then(() => {

      // Get a FCM token
      fcm.getToken()

      // Listen to incoming messages
      fcm.listenToNotifications().pipe(
        tap(msg => {
          // show a toast
          const toast = toastCtrl.create({
            message: msg.body,
            duration: 3000
          }).then((toast) => {
            toast.present();
          });
        })
      )    
    });    
  }
}
