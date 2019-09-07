import { Component,OnInit } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';
import {Platform } from '@ionic/angular';
import { FcmService } from '../services/fcm.service';
import { Router,NavigationExtras  } from '@angular/router';
import { ConStringService } from '../services/con-string.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
toast:any;
i=0;
public requestKey : Array<{ key: string; }> = [];
public getKey: Array<{ key: string; }> = [];
constructor(
  private fcm: FCM, 
  public plt: Platform, 
  public route: Router,   
  public constring:ConStringService, 
  private fcmService:FcmService,
  private localNotifications: LocalNotifications) {
  this.plt.ready()
    .then(() => {
      fcmService.getToken();
    });

    this.fcm.onNotification().subscribe(data => { 
      this.localNotifications.on('click').subscribe((notification) => {
      let navigationExtras: NavigationExtras = {            
          state: {
            values: data.token
          }
        };
        this.route.navigate(['list'],navigationExtras);
    });
      if (data.wasTapped) {  
        console.log("Received in background");
        let navigationExtras: NavigationExtras = {            
          state: {
            values: data.token
          }
        };
        this.route.navigate(['bor'],navigationExtras);
      } else {
        console.log("Received in foreground");
        const customer = data.custName + " from " + data.siteName
        this.localNotifications.schedule({
            title:'Block OverRide Alart',
            text: `${customer} amount is Full!`,
            icon:'',           
        });
        
      };
    });
}
ngOnInit() {    

}


}
