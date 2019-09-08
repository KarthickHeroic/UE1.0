import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule)
  },
  { path: 'bor', loadChildren: './pages/bor/bor.module#BorPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'cash-pos', loadChildren: './pages/cash-pos/cash-pos.module#CashPosPageModule' },
  { path: 'fuel-entry', loadChildren: './pages/fuel-entry/fuel-entry.module#FuelEntryPageModule' },
  { path: 'sale-item', loadChildren: './pages/sale-item/sale-item.module#SaleItemPageModule' },
  { path: 'sale-item-rpt', loadChildren: './pages/sale-item-rpt/sale-item-rpt.module#SaleItemRptPageModule' },
  { path: 'sale-pos', loadChildren: './pages/sale-pos/sale-pos.module#SalePosPageModule' },
  { path: 'sale-pos-rpt', loadChildren: './pages/sale-pos-rpt/sale-pos-rpt.module#SalePosRptPageModule' },
  { path: 'sale-pos-rpt-filter', loadChildren: './pages/sale-pos-rpt-filter/sale-pos-rpt-filter.module#SalePosRptFilterPageModule' },
  { path: 'shift-pos', loadChildren: './pages/shift-pos/shift-pos.module#ShiftPosPageModule' },
  { path: 'shift-pos-rpt', loadChildren: './pages/shift-pos-rpt/shift-pos-rpt.module#ShiftPosRptPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
