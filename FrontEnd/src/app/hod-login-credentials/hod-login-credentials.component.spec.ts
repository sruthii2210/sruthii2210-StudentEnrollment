import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodLoginCredentialsComponent } from './hod-login-credentials.component';

describe('HodLoginCredentialsComponent', () => {
  let component: HodLoginCredentialsComponent;
  let fixture: ComponentFixture<HodLoginCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodLoginCredentialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodLoginCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
