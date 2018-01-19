import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ConstantHelperService} from '../../services/constant-helper.service';
import {ProductService} from '../../services/product.service';
import {SuccessMessageComponent} from '../success-message/success-message.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  @Input() products: Product[];
  @Input() editMode: boolean;
  constructor(public constants: ConstantHelperService, public productService: ProductService,
              public dialog: MatDialog) { }

  ngOnInit() {
  }

  selectSize(key: number, product: Product): void {
      product.selectedSize = product.selectedSize === key ? null : key;
  }

  addToCart(product: Product): void {
    this.productService.addToCart(product);
    this.openDialog("Добавлено в корзину");
    product.selectedSize = null;
  }

  removeProduct(guid: string): void {
    this.productService.deleteProduct(guid);
  }

  deleteProduct(guid: string): void {
    this.openDeeteDialog('Вы дейтсвительно хотите удалить товар?', guid);
  }

  openDialog(title) {
    const dialogRef = this.dialog.open(SuccessMessageComponent, {
      height: '180px',
      width: '350px',
      data: {message: title}
    });
  }
  openDeeteDialog(title: string, guid: string) {
    const dialogRef = this.dialog.open(SuccessMessageComponent, {
      height: '180px',
      width: '350px',
      data: {
        message: title,
        isConfirm: true,
        action: () => {
          this.removeProduct(guid);
          this.products = this.productService.getProducts();
          dialogRef.close();
        }
      }
    });
  }
}
