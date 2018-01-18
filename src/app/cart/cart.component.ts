import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[];
  displayedColumns = ['name', 'price', 'guid'];
  dataSource = new MatTableDataSource<Product>(this.products);
  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProductsFromCart();
    this.dataSource =  new MatTableDataSource<Product>(this.products);
  }

  deleteProductFromCart(guid: string){
    this.productService.removeFromCart(guid);
  }

}
