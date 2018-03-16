import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
import { ProductService } from './services/product.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[TaskService, ProductService]
})

export class AppComponent { }
