import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { appConstant } from 'src/app/core/extensions/app-constants';

@Component({
  selector: 'learning-curve-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  toggleClass = appConstant.sidenavClass;
  isToggled = false;
  @Output() isSideNavToggled = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.isToggled = localStorage.getItem("isToggled") == "1" ? true : false;
  }

  toggleSideNav() {
    this.toggleClass = this.toggleClass == appConstant.sidenavClass ? appConstant.sidenavToggleClass : appConstant.sidenavClass;

    if (this.toggleClass == appConstant.sidenavToggleClass) {
      localStorage.setItem('sidenavClass', appConstant.sidenavToggleClass);
      this.isToggled = true;
      localStorage.setItem('isToggled', this.isToggled ? "1" : "0");
      this.isSideNavToggled.emit(true);
    }
    else {
      localStorage.setItem('sidenavClass', appConstant.sidenavClass);
      this.isToggled = false;
      localStorage.setItem('isToggled', this.isToggled ? "1" : "0");
      this.isSideNavToggled.emit(false);
    }
  }
}
