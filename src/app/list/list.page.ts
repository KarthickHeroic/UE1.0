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
  private noKey: any;
  private requestKey;


  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(public conString:ConStringService, public route: Router, private sqlLite:SqlLiteService) { 

    this.requestKey = sqlLite.getValues()
    console.log(this.requestKey);
    
    if(this.requestKey.length>0)
    {
      this.noKey=true;
    }

 
  }

  ionViewWillEnter(){
    this.requestKey.forEach(i =>
      {     
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

  } 

  ngOnInit() {

    
    
     
  }
  itemDetails(key){

    let navigationExtras: NavigationExtras  = {            
      state: {
        values: key
      }
    };
    this.route.navigate(['bor'],navigationExtras);
    console.log(key);
    
  }
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  
