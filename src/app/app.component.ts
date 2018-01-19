import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   navLinks = [
    {path: '/index', label: 'Магазин', iconName: 'home'},
    {path: '/cart', label: 'Корзина', iconName: 'shopping_cart'}
  ];
  constructor() {}
}
