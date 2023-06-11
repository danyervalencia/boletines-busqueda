import { TestBed } from '@angular/core/testing';

import { ArraySearchService } from './array-search.service';

describe('ArraySearchService', () => {
  let service: ArraySearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArraySearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
