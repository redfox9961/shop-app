import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-admin-actions',
  templateUrl: './admin-actions.component.html',
  styleUrls: ['./admin-actions.component.css']
})
export class AdminActionsComponent implements OnInit {
  @Input() guid: string;
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  deleteProduct(guid: string): void {
    this.productService.deleteProduct(guid);
  }

}
