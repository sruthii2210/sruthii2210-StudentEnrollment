import { TestBed } from '@angular/core/testing';

import { StudentAssignService } from './student-assign.service';

describe('StudentAssignService', () => {
  let service: StudentAssignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentAssignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
