import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnrollmentDetailsComponent } from './add-enrollment-details.component';

describe('AddEnrollmentDetailsComponent', () => {
  let component: AddEnrollmentDetailsComponent;
  let fixture: ComponentFixture<AddEnrollmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEnrollmentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEnrollmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
