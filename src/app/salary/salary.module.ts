import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@sc/shared';
import { SalaryRoutingModule } from './salary-routing.module';
import { SalaryComponent } from './salary/salary.component';

@NgModule({
    declarations: [
        SalaryComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        SalaryRoutingModule,
    ],
    providers: []
})
// tslint:disable-next-line: no-unnecessary-class
export class SalaryModule { }
