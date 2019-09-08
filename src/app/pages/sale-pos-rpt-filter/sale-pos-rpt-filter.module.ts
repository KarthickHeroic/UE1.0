import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalePosRptFilterPage } from './sale-pos-rpt-filter.page';

const routes: Routes = [
  {
    path: '',
    component: SalePosRptFilterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalePosRptFilterPage]
})
export class SalePosRptFilterPageModule {}
