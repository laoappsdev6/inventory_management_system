import { TestBed } from '@angular/core/testing';

import { SvProductCategoryService } from './sv-product-category.service';

describe('SvProductCategoryService', () => {
  let service: SvProductCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvProductCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
