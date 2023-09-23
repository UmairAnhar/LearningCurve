import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { appConstant } from 'src/app/core/extensions/app-constants';
import { SharedService } from 'src/app/core/services/shared.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'learning-curve-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  contentClass = 'content';

  sharedService = inject(SharedService);
  authService = inject(AuthService);
  router = inject(Router);

  constructor() {
    let sidenavClass = localStorage.getItem("sidenavClass");
    this.sharedService.setSidenavClass(sidenavClass == null ? appConstant.sidenavClass : sidenavClass!);
    this.isSideNavToggled((sidenavClass != null && sidenavClass == appConstant.sidenavToggleClass) ? true : false)

    if (this.authService.token == null)
      this.router.navigate(['/login']);
  }

  isSideNavToggled(isToggled: boolean) {
    this.contentClass = isToggled ? 'content close' : 'content';
  }
}
