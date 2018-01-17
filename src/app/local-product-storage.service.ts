import { Injectable } from '@angular/core';

const shopAppKey = 'shop-app';
const userCartKey = 'user-cart';

@Injectable()
export class LocalProductStorageService<T> {
  private storageKey: string;
  constructor() {
    this.setSaveToShopMode();
  }

  setSaveToShopMode(): void {
     this.storageKey = shopAppKey;
  }

  setSaveToCartMode(): void {
    this.storageKey = userCartKey;
  }

  getItems(): T[] {
    const items = JSON.parse(localStorage.getItem(this.storageKey));
    return items ? items : [];
  }

  addItem(item: T): void {
    const items = this.getItems() as T[];
    items.push(item);
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }

  updateItem(item: T, equals: (a: T, b: T) => boolean): void {
    const items = this.getItems() as T[];
    const index = items.findIndex(i => equals(i, item));
    items.splice(index, 1, item);
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }

  getItemByKey(key: any, search: (a: T, key: any) => boolean): T {
    const items = this.getItems() as T[];
    return items.find(i => search(i, key));
  }

  deleteItem(key: any, search: (a: T, key: any) => boolean): void {
    const items = this.getItems() as T[];
    const index = items.findIndex(i => search(i, key));
    items.splice(index, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }
}
