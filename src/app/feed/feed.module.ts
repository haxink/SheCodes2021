import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@sc/shared';
import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed/feed.component';

@NgModule({
    declarations: [
        FeedComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        FeedRoutingModule,
    ],
    providers: []
})
// tslint:disable-next-line: no-unnecessary-class
export class FeedModule { }
