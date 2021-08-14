import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';

const ACCOUNT_ROUTES: Routes = [
    {
        path: '',
        component: AccountComponent,
    },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(ACCOUNT_ROUTES)
    ],
    exports: [
        RouterModule
    ],
})
export class AccountRoutingModule { }
