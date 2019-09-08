import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShiftPosRptPage } from './shift-pos-rpt.page';

const routes: Routes = [
  {
    path: '',
    component: ShiftPosRptPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShiftPosRptPage]
})
export class ShiftPosRptPageModule {}
