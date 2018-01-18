import {Component, Inject, OnInit} from '@angular/core';
import {Product} from '../product';
import {ConstantHelperService} from '../constant-helper.service';
import {ProductService} from '../product.service';
import { Location } from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';

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

  // TODO: спросить за гавнохак у Леши
  // Upd: спросила, так надо:(
  selectedColorChanged(newValue: number) {
    this.product.colorId = newValue;
  }
  saveProduct(): void {
    const products = (typeof this.product.guid === 'undefined') ?
      this.productService.addProduct(this.product) : this.productService.editProduct(this.product);
       this.openDialog(this.product.name);
  }
  goBack(): void {
    this.location.back();
  }
  openDialog(title) {
    const dialogRef = this.dialog.open(SuccessMessageComponent, {
      height: '180px',
      width: '350px',
      data: title
    });

    dialogRef.afterClosed().subscribe(result => {
       this.goBack();
    });
  }
}

@Component({
  selector: 'app-success-message',
  templateUrl: '../dialogs/success-message.html',
})
export class SuccessMessageComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
}
