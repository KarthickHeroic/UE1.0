import { LoaderService } from '../../services/loader.service';
import { Component, OnInit } from '@angular/core';
import { ConStringService } from '../../services/con-string.service';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
selector: 'app-list',
templateUrl: 'list.page.html',
styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
public bor: Array<{id:string; siteName: string; custName: string; }> = [];
      public noKey: any;

      public getDoc: Observable<any[]>;

        public items: Array<{ title: string; note: string; icon: string }> = [];
          constructor(public conString:ConStringService, public route: Router, private loader:LoaderService,private firestore: AngularFirestore ) {
            this.getDoc = this.firestore.collection('bor',ref=>ref.where('isActive','==','0')).valueChanges();
             
          this.load();
            }
           

            load(){             
              
            this.loader.present();
          this.getDoc.subscribe(data => {      
               
               this.bor=[];             
            if(data.length>0)
            {
           
            this.noKey=true;
            }


            data.forEach(i=>{
        
            this.bor.push({
            id:i.token,
            siteName:i.siteName,
            custName:i.custName
            })
            })
               
            
            });
         this.loader.dismiss();        
            }


              ngOnInit() { }

              itemDetails(key){
              this.conString.getValues(key).subscribe(data => {
              if(data.payload.data()['isActive']=='0')
              {
              let navigationExtras: NavigationExtras = {
              state: {
              values: key
              }
              };
              this.route.navigate(['bor'],navigationExtras);
              }
              });
              }

              }