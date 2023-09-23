import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleCreateComponent } from './user-role-create.component';

describe('UserRoleCreateComponent', () => {
  let component: UserRoleCreateComponent;
  let fixture: ComponentFixture<UserRoleCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRoleCreateComponent]
    });
    fixture = TestBed.createComponent(UserRoleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
