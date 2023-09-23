import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotWorkspaceComponent } from './forgot-workspace.component';

describe('ForgotWorkspaceComponent', () => {
  let component: ForgotWorkspaceComponent;
  let fixture: ComponentFixture<ForgotWorkspaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotWorkspaceComponent]
    });
    fixture = TestBed.createComponent(ForgotWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
