import { TestBed } from '@angular/core/testing';

import { StaffSignUpService } from './staff-sign-up.service';

describe('StaffSignUpService', () => {
  let service: StaffSignUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffSignUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
