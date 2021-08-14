import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';

const COMPANIES_ROUTES: Routes = [
    {
        path: '',
        component: CompaniesListComponent,
    },
    {
        path: ':id',
        component: CompanyDetailsComponent,
    },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(COMPANIES_ROUTES)
    ],
    exports: [
        RouterModule
    ],
})
export class CompaniesRoutingModule { }
