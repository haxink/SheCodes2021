import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@sc/shared';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompaniesRoutingModule } from './companies-routing.module';
import { CompanyDetailsComponent } from './company-details/company-details.component';

@NgModule({
    declarations: [
        CompaniesListComponent,
        CompanyDetailsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        CompaniesRoutingModule,
    ],
    providers: []
})
// tslint:disable-next-line: no-unnecessary-class
export class CompaniesModule { }
