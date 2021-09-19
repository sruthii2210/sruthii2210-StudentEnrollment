import { TestBed } from '@angular/core/testing';

import { StaffAssignService } from './staff-assign.service';

describe('StaffAssignService', () => {
  let service: StaffAssignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffAssignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
