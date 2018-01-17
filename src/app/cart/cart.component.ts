import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[];
  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProductsFromCart();
  }

  deleteProductFromCart(guid: string){
    this.productService.removeFromCart(guid);
  }

}
