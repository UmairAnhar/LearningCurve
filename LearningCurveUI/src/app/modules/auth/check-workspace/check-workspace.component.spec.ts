import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckWorkspaceComponent } from './check-workspace.component';

describe('CheckWorkspaceComponent', () => {
  let component: CheckWorkspaceComponent;
  let fixture: ComponentFixture<CheckWorkspaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckWorkspaceComponent]
    });
    fixture = TestBed.createComponent(CheckWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
