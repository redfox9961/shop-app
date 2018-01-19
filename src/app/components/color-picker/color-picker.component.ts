import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Value} from '../../models/value';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Input() colors: Value[];
  @Input() selectedColor;
  @Input() disabled: boolean;
  @Output() selectedColorChanged = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  selectColor(colorId: number): void {
    if (!this.disabled) {
    this.selectedColor = this.selectedColor === colorId ? 0 : colorId;
    this.selectedColorChanged.emit(colorId);
    }
  }
}
