import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';

const JOBS_ROUTES: Routes = [
    {
        path: '',
        component: JobsListComponent,
    },
    {
        path: ':id',
        component: JobDetailsComponent,
    },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(JOBS_ROUTES)
    ],
    exports: [
        RouterModule
    ],
})
export class JobsRoutingModule { }
