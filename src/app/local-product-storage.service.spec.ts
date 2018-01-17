import { TestBed, inject } from '@angular/core/testing';

import { LocalProductStorageService } from './local-product-storage.service';

describe('LocalProductStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalProductStorageService]
    });
  });

  it('should be created', inject([LocalProductStorageService], (service: LocalProductStorageService) => {
    expect(service).toBeTruthy();
  }));
});
