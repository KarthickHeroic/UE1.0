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
        console.log("BOR"+this.data);
               
        this.getValues=JSON.stringify(this.data);          
        this.getObj=JSON.parse(this.getValues);
        
        this.siteId = this.getObj.siteId, 
        this.siteName = this.getObj.siteName,
        this.custId = this.getObj.custId,
        this.custName = this.getObj.custName,
        this.amount = this.getObj.amount,
        this.token = this.getObj.token
        this.sqlLite.insertKey(this.token);
            }
   if(this.token!=null){
    this.isReceive=false;
    this.isUpdate=true;   
   }
   else
   {
         this.isUpdate=false;
    this.isReceive=true;
   }
            
    });
  }

  ngOnInit() {        
    // this.isUpdate=false;
    // this.isReceive=true;
  }

  UpdateBOR(recordRow){
    let record = {};
    record['extent'] = this.extent;
    record['value'] = this.value;   
    record['isActive']= "1";
    this.ConStringService.update_bor(this.token,record);
    this.isReceive=true;
    this.isUpdate=false;
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