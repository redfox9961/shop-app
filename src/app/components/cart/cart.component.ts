import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {ConstantHelperService} from '../../services/constant-helper.service';
import {SuccessMessageComponent} from '../success-message/success-message.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[];
  selectedProducts: Product[] = [];
  totalPrice = 0;
  constructor(public productService: ProductService, public constants: ConstantHelperService, public dialog: MatDialog) { }

  ngOnInit() {
    this.products = this.productService.getProductsFromCart();
  }

  deleteProductFromCart(guid: string) {
    this.productService.removeFromCart(guid);
  }
  checkProduct(product: Product, event): void {
    if (event.checked) {
      this.selectedProducts.push(product);
    } else {
      const index = this.selectedProducts.indexOf(product);
      this.selectedProducts.splice(index, 1);
    }
    this.updateTotalPrice();
  }

  openDialog(title: string) {
    const dialogRef = this.dialog.open(SuccessMessageComponent, {
      height: '180px',
      width: '350px',
      data: {
        message: title,
        isConfirm: true,
        action: () => {
          this.selectedProducts.forEach((p) => {this.deleteProductFromCart(p.guid);});
          this.products = this.productService.getProductsFromCart();
          this.selectedProducts = [];
          this.updateTotalPrice();
          dialogRef.close();
        }
      }
    });
  }
  removeItemsFromCart(): void{
     this.openDialog("Вы действительно хотите удалить выбранные товары из корзины?")
  }

  updateTotalPrice(): void {
    this.totalPrice = 0;
    this.selectedProducts.forEach((p) => {this.totalPrice += p.price} );
  }


}
