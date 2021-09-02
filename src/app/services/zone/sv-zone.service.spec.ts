import { TestBed } from '@angular/core/testing';

import { SvZoneService } from './sv-zone.service';

describe('SvZoneService', () => {
  let service: SvZoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvZoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
