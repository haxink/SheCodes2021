import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '@sc/auth';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';

const APP_ROUTES: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: '',
    canActivate: [AuthGuardService],
    component: LayoutComponent,
    children: [
      {
        path: 'jobs',
        loadChildren: () => import('./jobs/jobs.module').then(mod => mod.JobsModule),
      },
      {
        path: 'companies',
        loadChildren: () => import('./companies/companies.module').then(mod => mod.CompaniesModule),
      },
      {
        path: 'salary',
        loadChildren: () => import('./salary/salary.module').then(mod => mod.SalaryModule),
      },
      {
        path: 'feed',
        loadChildren: () => import('./feed/feed.module').then(mod => mod.FeedModule),
      },
      {
        path: 'account',
        loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule),
      },
      { path: '', pathMatch: 'full', redirectTo: 'jobs', },
    ]
  },
];

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forRoot(APP_ROUTES, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
