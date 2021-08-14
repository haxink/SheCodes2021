import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaseComponent, LoadingButtonComponent } from './components';
import { FaIconsModule, NgBootstrapModule } from './modules';
import { RadioButtonComponent } from './radio-button/radio-button.component';

@NgModule({
  declarations: [
    LoadingButtonComponent,
    BaseComponent,
    RadioButtonComponent,
  ],
  imports: [
    CommonModule,
    NgBootstrapModule,
    FaIconsModule,
    FormsModule,
  ],
  exports: [
    LoadingButtonComponent,
    BaseComponent,
    FaIconsModule,
    NgBootstrapModule,
    RadioButtonComponent,
  ],
})
// tslint:disable-next-line: no-unnecessary-class
export class SharedModule { }
