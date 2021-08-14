import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@sc/shared';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account/account.component';

@NgModule({
    declarations: [
        AccountComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        AccountRoutingModule,
    ],
    providers: []
})
// tslint:disable-next-line: no-unnecessary-class
export class AccountModule { }
