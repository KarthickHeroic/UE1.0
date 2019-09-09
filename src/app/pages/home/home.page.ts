import { Component,OnInit } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';
import {Platform } from '@ionic/angular';
import { FcmService } from '../../services/fcm.service';
import { Router,NavigationExtras  } from '@angular/router';
import { ConStringService } from '../../services/con-string.service';
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
  ) {
  this.plt.ready()
    .then(() => {
      fcmService.getToken();
    });

}

cashReport(){  

  
 // this.route.navigate(['cash-pos']);
}
salesReport() {
 // this.route.navigate(['cash-pos']);

}
shiftReport() {
 // this.route.navigate(['cash-pos']);

}
salePosReport() {
 // this.route.navigate(['cash-pos']);
  
}

ngOnInit() {    

}


}
