import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';

const AUTH_ROUTES: Routes = [
    { path: 'login', component: LoginComponent, },
    { path: 'logout', component: LogoutComponent },
    { path: '', pathMatch: 'full', redirectTo: 'login', },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(AUTH_ROUTES)
    ],
    exports: [
        RouterModule
    ],
})
export class AuthRoutingModule { }
