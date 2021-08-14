import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';

const FEED_ROUTES: Routes = [
    {
        path: '',
        component: FeedComponent,
    },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(FEED_ROUTES)
    ],
    exports: [
        RouterModule
    ],
})
export class FeedRoutingModule { }
