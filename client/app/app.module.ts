import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import {TasksComponent} from './components/tasks/tasks.component';
import { ProductsComponent } from './components/products/products.components';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ReceiveComponent } from './components/receive/receive.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, AppRoutingModule ],
  declarations: [AppComponent, TasksComponent, ProductsComponent, InventoryComponent, ReceiveComponent, CheckoutComponent, AddproductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
