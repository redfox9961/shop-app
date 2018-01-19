import {Component, Inject, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ConstantHelperService} from '../../services/constant-helper.service';
import {ProductService} from '../../services/product.service';
import { Location } from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {SuccessMessageComponent} from '../success-message/success-message.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: Product;
  constructor(public constants: ConstantHelperService, public productService: ProductService, public location: Location,
              private activatedRoute: ActivatedRoute,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.product = new Product();
    this.activatedRoute.params.subscribe((params: Params) => {
      const guid = params['id'];
      if (typeof guid !== 'undefined') {
        this.product =  this.productService.getProductByGuid(guid);
      }
    });
  }

  selectedColorChanged(newValue: number) {
    this.product.colorId = newValue;
  }

  saveProduct(): void {
    const products = (typeof this.product.guid === 'undefined') ?
      this.productService.addProduct(this.product) : this.productService.editProduct(this.product);
       this.openDialog(this.product.name + ' сохранено успешно');
  }
  goBack(): void {
    this.location.back();
  }
  openDialog(title) {
    const dialogRef = this.dialog.open(SuccessMessageComponent, {
      height: '180px',
      width: '350px',
      data: {message: title}
    });

    dialogRef.afterClosed().subscribe(result => {
       this.goBack();
    });
  }
}

