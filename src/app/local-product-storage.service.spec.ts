import { TestBed, inject } from '@angular/core/testing';

import { LocalProductStorageService } from './local-product-storage.service';
import {Product} from './product';

describe('LocalProductStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalProductStorageService]
    });
  });

  it('should be created', inject([LocalProductStorageService], (service: LocalProductStorageService<Product>) => {
    expect(service).toBeTruthy();
  }));
});
