import { TestBed } from '@angular/core/testing';

import { HodLoginService } from './hod-login.service';

describe('HodLoginService', () => {
  let service: HodLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HodLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
