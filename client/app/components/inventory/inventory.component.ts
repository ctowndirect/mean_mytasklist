import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../../Product';

@Component({
  moduleId: module.id,
  selector: 'app-inventory',
  templateUrl: './inventory.component.html'
})

export class InventoryComponent {
    products: Product[];
    name: string;
    sku: string;
    upc: string;
    quantity: number;
    disableSaveBtn: boolean;
    
    constructor(private productService:ProductService){
        this.disableSaveBtn = true;
        this.productService.getProducts()
            .subscribe(products => {
                this.products = products;
            });
    }

    updateProduct(product){
        var _product = {
            _id:product._id,
            sku:product.sku,
            upc: product.upc,
            name: product.name,
            quantity: product.quantity
        }
        
        console.log('Product ' + _product.quantity)

        this.productService.updateProduct(_product).subscribe(data => {
            product.sku = _product.sku;
            product.name = _product.name;
            product.upc = _product.upc;
            product.quantity = _product.quantity;
            this.disableSaveBtn = true;
        });
    }    

    deleteProduct(id){
        var products = this.products;
        
        this.productService.deleteProduct(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0;i < products.length;i++){
                    if(products[i]._id == id){
                        products.splice(i, 1);
                    }
                }
            }
        });
    }

    checkQtyChange() {
            // enable the button
        this.disableSaveBtn = false;
        
    }

    checkDisable(product){
        if (pr)
        return this.disableSaveBtn;
    }
}