import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {SuccessMessageComponent} from '../success-message/success-message.component';
import {MatDialog} from '@angular/material';
import {ManagementPageComponent} from '../management-page/management-page.component';

@Component({
  selector: 'app-admin-actions',
  templateUrl: './admin-actions.component.html',
  styleUrls: ['./admin-actions.component.css']
})
export class AdminActionsComponent implements OnInit {
  @Input() guid: string;

  constructor(private productService: ProductService, public dialog: MatDialog) {
  }

  ngOnInit() {
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
          location.reload();
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
