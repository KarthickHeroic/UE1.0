import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConStringService } from '../services/con-string.service';

import { AlertController } from '@ionic/angular';
import { SqlLiteService } from '../services/sql-lite.service';

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

  constructor(private route: ActivatedRoute, private router:Router, public ConStringService:ConStringService, public sqlLite:SqlLiteService) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.values; 
        this.getReqKey=JSON.parse(JSON.stringify(this.data));      

       this.ConStringService.getValues(this.getReqKey.token).subscribe(getReqData => {       
        this.siteId = getReqData.payload.data()['siteId'],
                this.siteName =getReqData.payload.data()['siteName'],
               this.custId = getReqData.payload.data()['custId'],
                this.custName = getReqData.payload.data()['custName'],
                this.amount = getReqData.payload.data()['amount'],
                this.token =getReqData.payload.data()['token']
              });
      }
    });
}

  ngOnInit() {        
  
  }
 

  UpdateBOR(){
    let record = {};
    record['extent'] = this.extent;
    record['value'] = this.value;   
    record['isActive']= "1";
    this.ConStringService.update_bor(this.token,record);
    this.isReceive=true;
    this.isUpdate=false;
    this.router.navigate(['list']);

  }  
}