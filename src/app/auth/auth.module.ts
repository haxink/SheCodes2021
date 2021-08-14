import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@sc/shared';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [
        LoginComponent,
        LogoutComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        SharedModule,
        AuthRoutingModule,
    ],
    providers: [AuthService]
})
// tslint:disable-next-line: no-unnecessary-class
export class AuthModule { }
