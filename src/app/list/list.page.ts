import { Component, OnInit } from '@angular/core';
import { ConStringService } from '../services/con-string.service';
import { NavigationExtras, Router } from '@angular/router';
import { SqlLiteService } from '../services/sql-lite.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public bor: Array<{id:string; siteName: string; custName: string; }> = [];
  public requestKey : Array<{ key: string; }> = [];
  public getKey: Array<{ key: string; }> = [];
  public noKey: any;
  


  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(public conString:ConStringService, public route: Router, public sqlLite:SqlLiteService) { 

    this.sqlLite.getValues()
    .then((res) => {     
      for(var i=0; i<res.rows.length; i++) {                            
              this.requestKey.push({key:res.rows.item(i).key});     
            }
            let getValues=JSON.stringify(this.requestKey);          
            this.getKey=JSON.parse(getValues);
            console.log(this.getKey);
  
            if(Object.keys(this.getKey).length>0)
            {
              this.noKey=true;
            }
            this.getKey.forEach(i =>
              {     
                console.log(i.key);
                
                this.conString.getValues(i.key).subscribe(data => {
                  if(data.payload.data()['isActive']=='0')
                  {
                    this.bor.push({
                      id:i.key,
                      siteName:data.payload.data()['siteName'],
                    custName:data.payload.data()['custName']      
                    }) 
                  }
                });  
              })
            
            // console.log("FinalKey_Set"+JSON.parse(JSON.stringify(this.requestKey)));   
     });
    
    
      
    
    
  }

  ngOnInit() {  }

  itemDetails(key){

    let navigationExtras: NavigationExtras  = {            
      state: {
        values: key
      }
    };
    this.route.navigate(['bor'],navigationExtras);
   
    
  }
  }
 
  
