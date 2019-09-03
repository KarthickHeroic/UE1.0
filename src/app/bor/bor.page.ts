import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConStringService } from '../services/con-string.service';

@Component({
  selector: 'app-bor',
  templateUrl: './bor.page.html',
  styleUrls: ['./bor.page.scss'],
})
export class BorPage implements OnInit {

  extent: string;
  value:number;
  data:any;
  constructor(private route: ActivatedRoute, private router:Router, public ConStringService:ConStringService) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.values;
        console.log("BOR");
        console.log(this.data);
      }
     

    
     
    });
  }

  ngOnInit() {
  }

  UpdateBOR(recordRow){
    let record = {};
    record['Extent'] = this.extent;
    record['Value'] = this.value;   
    record['isActive']= "0";
    this.ConStringService.update_bor('10nYY3gUsNXzoaEfQxcL',record)
}
}