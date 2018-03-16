import { Component } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../../Product';

@Component({
  moduleId: module.id,
  selector: 'products',
  templateUrl: 'products.component.html'
})

export class ProductsComponent { 
    products: Product[];
    name: string;
    sku: string;
    upc: string;
    quantity: number;
    
    constructor(private productService:ProductService){
        this.productService.getProducts()
            .subscribe(products => {
                this.products = products;
            });
    }
    
    addProduct(event){
        event.preventDefault();
        var newProduct = {
            name: this.name,
            sku: this.sku,
            upc: this.upc,
            quantity: this.quantity
        }
        
        this.productService.addProduct(newProduct)
            .subscribe(product => {
                this.products.push(product);
            });
    }
    
    deleteProduct(sku){
        var products = this.products;
        
        this.productService.deleteProduct(sku).subscribe(data => {
            if(data.n == 1){
                for(var i = 0;i < products.length;i++){
                    if(products[i].sku == sku){
                        products.splice(i, 1);
                    }
                }
            }
        });
    }
    
    updateStatus(product){
        var _product = {
            sku: product.sku,
            name: product.name,
            upc: product.upc,
            quantity: product.quantity
        };
        
        this.productService.updateProduct(_product).subscribe(data => {
            product.sku = _product.sku;
            product.name = _product.name;
            product.upc = _product.upc;
            product.quantity = _product.quantity;
        });
    }
}
