import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginAdminComponent } from '../components/login-admin/login-admin.component';
import { DashboardAdminComponent } from '../components/dashboard-admin/dashboard-admin.component';



const routes: Routes = [
  { path: 'loginAdmin', component: LoginAdminComponent },
  { path: 'dashboardAdmin', component: DashboardAdminComponent },
  { path: '', redirectTo: '/loginAdmin', pathMatch: 'full' }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
