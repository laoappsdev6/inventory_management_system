import { TestBed } from '@angular/core/testing';

import { SvProductUnitService } from './sv-product-unit.service';

describe('SvProductUnitService', () => {
  let service: SvProductUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvProductUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
