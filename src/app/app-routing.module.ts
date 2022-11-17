import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { AuthGuard } from './resources/guards/auth.guard';
import { IntroComponent } from './components/views/intro/intro.component';
import { LoginComponent } from './components/views/login/login.component';
import { NewTransComponent } from './components/views/new-trans/new-trans.component';

const routes: Routes = [  { path: '',component: IntroComponent},
{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
{ path: 'transacao', component: NewTransComponent, canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
