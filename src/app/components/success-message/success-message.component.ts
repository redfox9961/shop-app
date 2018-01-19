import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-success-message',
  templateUrl: '../../templates/dialogs/success-message.html',
})
export class SuccessMessageComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}

  action(): void {
    this.data.action();
  }
}
