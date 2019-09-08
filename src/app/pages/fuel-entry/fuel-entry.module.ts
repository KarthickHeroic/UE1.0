import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FuelEntryPage } from './fuel-entry.page';

const routes: Routes = [
  {
    path: '',
    component: FuelEntryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FuelEntryPage]
})
export class FuelEntryPageModule {}
