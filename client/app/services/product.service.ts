import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService{
    constructor(private http:Http){
        console.log('Product Service Initialized...');
    }
    
    getProducts(){
        return this.http.get('/api/products')
            .map(res => res.json());
    }
    
    addProduct(newProduct){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/product', JSON.stringify(newProduct), {headers: headers})
            .map(res => res.json());
    }
    
    deleteTask(sku){
        return this.http.delete('/api/product/'+sku)
            .map(res => res.json());
    }
    
    updateStatus(product){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/product/'+product.sku, JSON.stringify(product), {headers: headers})
            .map(res => res.json());
    }
}