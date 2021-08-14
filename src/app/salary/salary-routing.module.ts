import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaryComponent } from './salary/salary.component';

const SALARY_ROUTES: Routes = [
    {
        path: '',
        component: SalaryComponent,
    },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(SALARY_ROUTES)
    ],
    exports: [
        RouterModule
    ],
})
export class SalaryRoutingModule { }
