import { Injectable } from '@angular/core';
import {Product} from './product';
import {LocalProductStorageService} from './local-product-storage.service';

@Injectable()
export class ProductService {
    productEquals = (a: Product, b: Product): boolean => {
      return a.guid === b.guid;
    };

    searchProducts = (item: Product, key: string): boolean => {
      return item.guid === key;
    };

    constructor(public storage: LocalProductStorageService<Product>) { }

    getProducts(): Product[] {
       return this.storage.getItems();
    }

    getProductByGuid(guid: string): Product {
      return this.storage.getItemByKey(guid, this.searchProducts);
    }

    addProduct(product: Product): Product[] {
      product.guid = this.randomGuid();
      this.storage.addItem(product);
      return this.getProducts();
    }

    editProduct(product: Product): Product[] {
      this.storage.updateItem(product, this.productEquals);
      return this.getProducts();
    }

    deleteProduct(guid: string): void {
       this.storage.deleteItem(guid, this.searchProducts);
    }

    private randomGuid(): string {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
}
