import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodForgotPasswordComponent } from './hod-forgot-password.component';

describe('HodForgotPasswordComponent', () => {
  let component: HodForgotPasswordComponent;
  let fixture: ComponentFixture<HodForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodForgotPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
