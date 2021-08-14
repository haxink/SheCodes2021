import { Component, Input } from '@angular/core';

@Component({
  selector: 'sc-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.scss']
})
export class LoadingButtonComponent {
  @Input() public btnClass: string;
  @Input() public btnType = 'button';
  @Input() public isSpinning = false;
  @Input() public disabled = false;
}
