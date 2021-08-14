import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesModule } from 'app/companies';
import { JobsModule } from 'app/jobs';
import { SalaryModule } from 'app/salary';
import { LayoutComponent } from './layout.component';
import { LayoutModule } from './layout.module';

const LAYOUT_ROUTES: Routes = [
    {
        path: 'jobs',
        component: LayoutComponent,
        loadChildren: () => import('../jobs/jobs.module').then(mod => mod.JobsModule),
    },
    {
        path: 'companies',
        component: LayoutComponent,
        loadChildren: () => import('../companies/companies.module').then(mod => mod.CompaniesModule),
    },
    {
        path: '',
        component: LayoutComponent,
        loadChildren: () => import('../jobs/jobs.module').then(mod => mod.JobsModule),
    },
    { path: '', pathMatch: 'full', redirectTo: 'jobs', },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        LayoutModule,
        JobsModule,
        CompaniesModule,
        SalaryModule,
        RouterModule.forChild(LAYOUT_ROUTES)
    ],
    exports: [
        RouterModule
    ],
})
export class LayoutRoutingModule { }
