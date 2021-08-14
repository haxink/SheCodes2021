import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [
        SidebarComponent,
        LayoutComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
})
// tslint:disable-next-line: no-unnecessary-class
export class LayoutModule { }
