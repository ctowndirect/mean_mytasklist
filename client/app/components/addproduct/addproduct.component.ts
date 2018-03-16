import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../../Product';
import { INTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser/src/browser';

@Component({
    moduleId: module.id,
    selector: 'app-addproduct',
    templateUrl: './addproduct.component.html'
  })

export class AddproductComponent {
    sku: string;
    upc: string;
    name: string;
    quantity: string;

    constructor(private productService:ProductService){
    }

    addProduct(event){
        event.preventDefault();
        var newProduct = {
            sku: this.sku,
            upc: this.upc,
            name: this.name,
            quantity: this.quantity
        }
        
        console.log('Test' + this.sku);

        this.productService.addProduct(newProduct)
            .subscribe(product => {
                this.upc = '';
                this.sku = '';
                this.name = '';
                this.quantity = '';
            });
    }

}