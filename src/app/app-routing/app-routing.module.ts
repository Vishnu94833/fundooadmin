import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from '../components/login-admin/login-admin.component';
import { DashboardAdminComponent } from '../components/dashboard-admin/dashboard-admin.component';
import { AuthGuard } from '../auth.guard';
import { QuestionanswerComponent } from '../components/questionanswer/questionanswer.component';
import { OrdercompleteComponent } from '../components/ordercomplete/ordercomplete.component';



const routes: Routes = [
  { path: '', component: DashboardAdminComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'loginAdmin', component: LoginAdminComponent },
  { path: 'dashboardAdmin', component: DashboardAdminComponent, canActivate: [AuthGuard] },
  { path: 'questionanswer', component: QuestionanswerComponent},
  { path: 'ordercomplete', component: OrdercompleteComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
