import { TestBed } from '@angular/core/testing';

import { SvProductsService } from './sv-products.service';

describe('SvProductsService', () => {
  let service: SvProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
