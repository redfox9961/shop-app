import { Injectable } from '@angular/core';
import {InMemoryDbService, InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {Product} from './product';

@Injectable()
export class ProductDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    const products: Product[] = [ new Product()
    ];
    console.log(products);
    return {products};
  }
}
