import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@sc/shared';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobsRoutingModule } from './jobs-routing.module';

@NgModule({
    declarations: [
        JobsListComponent,
        JobDetailsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        JobsRoutingModule,
    ],
    providers: []
})
// tslint:disable-next-line: no-unnecessary-class
export class JobsModule { }
