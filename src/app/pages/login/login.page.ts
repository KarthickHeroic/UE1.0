import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor( public storage: Storage, public route:Router, private toastCtrl:ToastController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  pushPage() {
    this.storage.set('Status', 'login');
    this.route.navigate(['home']);   
  }
  ngOnInit(){
    this.storage.set('Status', 'logout');
  }


  Submit(inputs) {
    if (inputs.value.username == "admin") {
      if (inputs.value.password == "admin") {
        this.pushPage()
      }
      else {      
        this.presentToast("Password is invalid!");
      }
    }
    else {
      this.presentToast("User Name is invalid!");     
    }
  }
  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
