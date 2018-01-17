import { Injectable } from '@angular/core';
import {InMemoryDbService, InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {Product} from './product';

@Injectable()
export class ProductDataService implements InMemoryDbService {
 // private storageKey = 'shop-app-products';
  constructor() { }

  createDb() {
    const products: Product[] = [];
    return {products};
  }

  /*private getProductsFromLocalStorage(): Product[] {
    const products = JSON.parse(localStorage.getItem(this.storageKey)) as Product[];
    return products == null ? [] : products;
  }

  public saveProductsToLocalStorage(): void {
     // console.log(this.products);
//    localStorage.setItem(this.storageKey, JSON.stringify(this.products));
  }*/
}
