import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Option {
  text: string;
  value: string;
  iconUrl?: string;
  selected?: boolean;
  html?: string;
  width?: number;
  height?: number;
  color?: string;
  class?: string;
  lineWidth?: number;
  dashed?: number[];
}

@Component({
  selector: 'sc-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
  @Input() options: Option[];
  @Output() changed = new EventEmitter<string>();
  @Input() disabled = false;

  selectedValue: string;

  public ngOnInit() {
    this.selectedValue = this.options.find(item => {
      return item.selected;
    }).value;
  }

  public onChange() {
    this.changed.emit(this.selectedValue);
  }
}
