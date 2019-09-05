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
  getValues:any;
  getObj:any;
  isUpdate:any;
  isReceive:any;

  constructor(private route: ActivatedRoute, private router:Router, public ConStringService:ConStringService, public sqlLite:SqlLiteService) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.values; 
      
       this.ConStringService.getValues(this.data).subscribe(data => {
        console.log("BOR SITE NAME"+this.data.payload.data()['siteName']);
        this.siteId = data.payload.data()['siteId'],
                this.siteName =data.payload.data()['siteName'],
               this.custId = data.payload.data()['custId'],
                this.custName = data.payload.data()['custName'],
                this.amount = data.payload.data()['amount'],
                this.token =data.payload.data()['token']
       });
      }
    });
}

  ngOnInit() {        
  
  }
 

  UpdateBOR(recordRow){
    let record = {};
    record['extent'] = this.extent;
    record['value'] = this.value;   
    record['isActive']= "1";
    this.ConStringService.update_bor(this.token,record);
    this.isReceive=true;
    this.isUpdate=false;
    this.router.navigate(['list']);

  }
  insert(){
    this.sqlLite.insertKey("68768775");
  }
  delete()
  {
    this.sqlLite.deleteData("68768775");
  }
  getKey(){
    this.sqlLite.getValues();
  }
}