import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-management-page',
  templateUrl: './management-page.component.html',
  styleUrls: ['./management-page.component.css']
})
export class ManagementPageComponent implements OnInit {
  products: Product[];

  constructor(public productService: ProductService) { }

  ngOnInit() {
   this.products = this.productService.getProducts();
  }

}
