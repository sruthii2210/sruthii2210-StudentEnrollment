import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCourseAssignComponent } from './staff-course-assign.component';

describe('StaffCourseAssignComponent', () => {
  let component: StaffCourseAssignComponent;
  let fixture: ComponentFixture<StaffCourseAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffCourseAssignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffCourseAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
