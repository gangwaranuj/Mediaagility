import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-page/login/login.component';
import { UserListComponent } from './user-list/user-list/user-list.component';
import { AuthentiationGuardService } from './services/authentiation-guard.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user-list', component: UserListComponent , canActivate: [AuthentiationGuardService] },
  { path: '**', redirectTo: '/login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
