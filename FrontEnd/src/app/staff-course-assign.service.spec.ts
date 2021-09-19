import { TestBed } from '@angular/core/testing';

import { StaffCourseAssignService } from './staff-course-assign.service';

describe('StaffCourseAssignService', () => {
  let service: StaffCourseAssignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffCourseAssignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
