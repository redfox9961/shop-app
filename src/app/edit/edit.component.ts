import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ConstantHelperService} from '../constant-helper.service';
import {ProductService} from '../product.service';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: Product;
  constructor(public constants: ConstantHelperService, public productService: ProductService) { }

  ngOnInit() {
    this.product = new Product();
  }

  // TODO: спросить за гавнохак у Леши
  selectedColorChanged(newValue: number) {
    this.product.colorId = newValue;
  }
  saveProduct(): void {
    this.productService.addProduct(this.product);
    let prod: any = of(this.productService.getProducts());
    console.log(prod);
  }
}
