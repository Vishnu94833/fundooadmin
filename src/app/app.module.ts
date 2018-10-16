import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    DashboardAdminComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
