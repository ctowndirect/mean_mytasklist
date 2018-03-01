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
            quantity: this
        }
        
        this.taskService.addTask(newTask)
            .subscribe(task => {
                this.tasks.push(task);
                this.title = '';
            });
    }
    
    deleteTask(id){
        var tasks = this.tasks;
        
        this.taskService.deleteTask(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0;i < tasks.length;i++){
                    if(tasks[i]._id == id){
                        tasks.splice(i, 1);
                    }
                }
            }
        });
    }
    
    updateStatus(task){
        var _task = {
            _id:task._id,
            title: task.title,
            isDone: !task.isDone
        };
        
        this.taskService.updateStatus(_task).subscribe(data => {
            task.isDone = !task.isDone;
        });
    }
}
