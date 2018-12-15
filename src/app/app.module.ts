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
import { QuestionanswerComponent } from '../app/components/questionanswer/questionanswer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { OrdercompleteComponent } from './components/ordercomplete/ordercomplete.component';
// import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    DashboardAdminComponent,
    QuestionanswerComponent,
    LoaderComponent,
    OrdercompleteComponent
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
