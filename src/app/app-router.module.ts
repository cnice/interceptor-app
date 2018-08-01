import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { LoggedInGuard } from './logged-in.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NoAccessComponent } from './no-access/no-access.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [ LoggedInGuard ]
  },
  { path: 'no-access', component: NoAccessComponent },
  { path: 'pagenotfound', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [
    LoggedInGuard
  ]
})
export class AppRoutingModule { }

export const routedComponents = [LoginComponent];
