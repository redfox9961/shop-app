import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {ActivatedRoute, Params} from '@angular/router';
import {ConstantHelperService} from '../constant-helper.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  product: Product;

  constructor(public productService: ProductService, public activatedRoute: ActivatedRoute,
              public constants: ConstantHelperService,
              public location: Location) { }

  ngOnInit() {
    this.product = new Product();
    this.activatedRoute.params.subscribe((params: Params) => {
      const guid = params['id'];
      if (typeof guid !== 'undefined') {
        this.product =  this.productService.getProductByGuid(guid);
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

  addToCart(product: Product): void {
     this.productService.addToCart(product);
  }


}
