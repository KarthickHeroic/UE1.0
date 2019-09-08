import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader.service';
import { SqlServerserviceService } from 'src/app/services/sql-serverservice.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cash-pos',
  templateUrl: './cash-pos.page.html',
  styleUrls: ['./cash-pos.page.scss'],
})
export class CashPosPage {
  public getData = [];
  total = 0.0;
  rTotal: string;
  alartarry =[];
  loading;
  constructor( private toastCtrl: ToastController, public loadingCtrl: LoaderService, private service:SqlServerserviceService) { }

 
  updateCss(){
    setTimeout(()=>{
      var div = document.querySelector('#itemListId');
      for(let i=0;i<this.alartarry.length; i++)
      {    
        if(this.alartarry[i]==1)
        {
          let j=i+1;
          div.querySelectorAll('.item:nth-child(' + j + 'n+0)')[0].classList.add('alart');       
        }
        else
        {
          let j=i+1;
          div.querySelectorAll('.item:nth-child(' + j + 'n+0)')[0].classList.add('alart-padding');   
        }    
      }
    },500);
   
  }

  ionViewDidLeave(){
    this.loading.dismissAll();
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  refresh() {
    this.getdata("r");
  }

  getdata(sType) {
  

    this.getData = [];

    this.loadingCtrl.present();
   
  
     this.loading.present();
    this.service.getCash(sType).pipe(map(res => res))
    .subscribe(data => {
      var SubString = data;
      //var SubString = data.match(/\[(.*?)\]/);
      this.getData.push(SubString[0])
      this.getData = JSON.parse(this.getData[0]);
      this.rTotal = this.getData[this.getData.length - 1]["CashBal"];
      this.getData.splice(-1, 1);
      this.alartarry=[];
      this.getData.forEach(eachObj => {
        this.alartarry.push(eachObj["UpStat"]);
      });
      this.updateCss();
      this.loadingCtrl.dismiss();
    },
      err => {
        this.loadingCtrl.dismiss();
        this.presentToast("Server Error");
      });
  }


}
