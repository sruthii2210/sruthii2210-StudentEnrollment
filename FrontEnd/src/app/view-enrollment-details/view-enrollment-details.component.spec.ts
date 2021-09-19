import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEnrollmentDetailsComponent } from './view-enrollment-details.component';

describe('ViewEnrollmentDetailsComponent', () => {
  let component: ViewEnrollmentDetailsComponent;
  let fixture: ComponentFixture<ViewEnrollmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEnrollmentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEnrollmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
