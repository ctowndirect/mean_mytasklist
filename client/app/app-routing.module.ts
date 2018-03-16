import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InventoryComponent }  from './components/inventory/inventory.component';
import { ReceiveComponent }   from './components/receive/receive.component';
import { CheckoutComponent }  from './components/checkout/checkout.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';


const routes: Routes = [
  { path: '', redirectTo: '/inventory', pathMatch: 'full' },
  { path: 'inventory', component: InventoryComponent },
  { path: 'receive', component: ReceiveComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'addproduct', component: AddproductComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
