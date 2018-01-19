import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {SuccessMessageComponent} from '../success-message/success-message.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-management-page',
  templateUrl: './management-page.component.html',
  styleUrls: ['./management-page.component.css']
})
export class ManagementPageComponent implements OnInit {
  products: Product[];

  constructor(public productService: ProductService, public dialog: MatDialog) { }

  ngOnInit() {
   this.products = this.productService.getProducts();
  }


  openDialog(title: string, guid: string) {
    const dialogRef = this.dialog.open(SuccessMessageComponent, {
      height: '180px',
      width: '350px',
      data: {
        message: title,
        isConfirm: true,
        action: () => {
          this.removeProduct(guid);
          this.products = this.productService.getProducts();
        }
      }
    });
  }

  removeProduct(guid: string): void {
    this.productService.deleteProduct(guid);
  }

  deleteProduct(guid: string): void {
    this.openDialog('Вы дейтсвительно хотите удалить товар?', guid);
  }

}
