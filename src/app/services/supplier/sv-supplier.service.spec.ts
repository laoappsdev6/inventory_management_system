import { TestBed } from '@angular/core/testing';

import { SvSupplierService } from './sv-supplier.service';

describe('SvSupplierService', () => {
  let service: SvSupplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvSupplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
