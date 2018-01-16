import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Product} from './product';
import {tap} from 'rxjs/operators';

@Injectable()
export class ProductService {
    private productUrl = 'api/products'

    constructor(public  http: HttpClient) { }

    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.productUrl);
    }

    addProduct(product: Product): void {
      this.http.post(this.productUrl, product,
        {  headers: new HttpHeaders(
          { 'Content-Type': 'application/json' })});
    }
}
