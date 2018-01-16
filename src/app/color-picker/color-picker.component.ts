import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Value} from '../value';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Input() colors: Value[];
  @Input() selectedColor;
  @Output() selectedColorChanged = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  selectColor(colorId: number): void {
    this.selectedColor = colorId;
    this.selectedColorChanged.emit(colorId);
  }
}
