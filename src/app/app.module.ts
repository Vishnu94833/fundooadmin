import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
// import { HttpService } from './service/service.service';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { AuthserviceService } from './authservice.service';
import { AuthGuard } from './auth.guard';
import { QuestionanswerComponent } from './questionanswer/questionanswer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    DashboardAdminComponent,
    QuestionanswerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule


  ],
  providers: [AuthserviceService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
