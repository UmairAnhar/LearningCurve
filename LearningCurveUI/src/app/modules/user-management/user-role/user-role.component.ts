import { Component, inject } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';
import { UserRoleCreateComponent } from './user-role-create/user-role-create.component';

@Component({
  selector: 'learning-curve-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.scss']
})
export class UserRoleComponent {

  modalService = inject(ModalService);

  openUserRole() {
    this.modalService.displayDialog(UserRoleCreateComponent, {
      
    });
  }
}
