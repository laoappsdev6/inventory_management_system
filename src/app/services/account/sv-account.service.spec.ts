import { TestBed } from '@angular/core/testing';

import { SvAccountService } from './sv-account.service';

describe('SvAccountService', () => {
  let service: SvAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
