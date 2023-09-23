import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserComponent } from './user/user.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { UserPermissionComponent } from './user-permission/user-permission.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserRoleCreateComponent } from './user-role/user-role-create/user-role-create.component';
import { UserOverviewComponent } from './user-overview/user-overview.component';


@NgModule({
  declarations: [
    UserComponent,
    UserRoleComponent,
    UserPermissionComponent,
    UserCreateComponent,
    UserRoleCreateComponent,
    UserOverviewComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    SharedModule
  ]
})
export class UserManagementModule { }
