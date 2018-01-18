import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   navLinks = [
    {path: '/index', label: 'Shop'},
    {path: '/admin', label: 'Admin'},
    {path: '/cart', label: 'Cart'}
  ];
  constructor() {}
}
