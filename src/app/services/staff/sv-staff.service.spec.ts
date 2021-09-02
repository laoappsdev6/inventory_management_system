import { TestBed } from '@angular/core/testing';

import { SvStaffService } from './sv-staff.service';

describe('SvStaffService', () => {
  let service: SvStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
