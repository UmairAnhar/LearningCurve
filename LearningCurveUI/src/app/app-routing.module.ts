import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { authGuard } from './core/guards/auth.guard';
import { HomeComponent } from './modules/auth/home/home.component';
import { ResetPasswordComponent } from './modules/auth/reset-password/reset-password.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { CheckWorkspaceComponent } from './modules/auth/check-workspace/check-workspace.component';
import { ForgotWorkspaceComponent } from './modules/auth/forgot-workspace/forgot-workspace.component';
import { LoginComponent } from './modules/auth/login/login.component';

const routes: Routes = [
  {
    path: 'main',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'user-management',
        loadChildren: () => import('./modules/user-management/user-management.module').then(t => t.UserManagementModule)
      },
    ]
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'workspace',
    component: CheckWorkspaceComponent
  },
  {
    path: 'forgot-workspace',
    component: ForgotWorkspaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
