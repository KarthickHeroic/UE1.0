import { LoaderService } from './../services/loader.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConStringService } from '../services/con-string.service';
import { ToastController } from '@ionic/angular';




@Component({
selector: 'app-bor',
templateUrl: './bor.page.html',
styleUrls: ['./bor.page.scss'],
})
export class BorPage implements OnInit {

extent: string;
value:number;
data:any;
siteId: string;
siteName: string;
custId: string;
custName: string;
amount: string;
token:string;
getReqKey:any;
getObj:any;
isUpdate:any;
isReceive:any;
  buttonActive: boolean;





constructor(private route: ActivatedRoute, private router:Router, public ConStringService:ConStringService,
 private toastCtrl:ToastController, loader:LoaderService){

  loader.present();
this.route.queryParams.subscribe(params => {
if (this.router.getCurrentNavigation().extras.state) {
this.data = this.router.getCurrentNavigation().extras.state.values;
this.ConStringService.getValues(this.data).subscribe(getReqData => {
if(getReqData.payload.data()['isActive']=="0"){
this.siteId = getReqData.payload.data()['siteId'],
this.siteName =getReqData.payload.data()['siteName'],
this.custId = getReqData.payload.data()['custId'],
this.custName = getReqData.payload.data()['custName'],
this.amount = getReqData.payload.data()['amount'],
this.token =getReqData.payload.data()['token']
}
});
}
loader.dismiss();
});

}

ngOnInit() {

      this.buttonActive=true;
  
}

valueChange(value){ 
  if(this.extent=="days")
  {
    value.target.maxlength="3";
    if(value.detail.value>100)
    {
      this.buttonActive=true;
      this.presentToast("Should not exist more than 100 days"); 
    }
    else
    {
      this.buttonActive=false;
    }
  }
  else if(this.extent=="amount"){
    value.target.maxlength="7";
    if(value.detail.value>1000000)
    {
      this.buttonActive=true;
      this.presentToast("Should not exist more than 10,00,000 Rupees");   
    }
    else
    {
      this.buttonActive=false;
    }
  }
 
  
}

UpdateBOR(){
let record = {};
record['extent'] = this.extent;
record['value'] = this.value;
record['isActive']= "1";
this.ConStringService.update_bor(this.token,record);
this.presentToast("BOR Updated");  
this.router.navigate(['list']);
}


async presentToast(message) {
  const toast = await this.toastCtrl.create({
    message: message,
    duration: 2000
  });
  toast.present();
}
}