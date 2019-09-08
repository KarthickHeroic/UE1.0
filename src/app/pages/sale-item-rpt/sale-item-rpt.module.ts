import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SaleItemRptPage } from './sale-item-rpt.page';

const routes: Routes = [
  {
    path: '',
    component: SaleItemRptPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SaleItemRptPage]
})
export class SaleItemRptPageModule {}
