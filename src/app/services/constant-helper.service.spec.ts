import { TestBed, inject } from '@angular/core/testing';

import { ConstantHelperService } from './constant-helper.service';

describe('ConstantHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConstantHelperService]
    });
  });

  it('should be created', inject([ConstantHelperService], (service: ConstantHelperService) => {
    expect(service).toBeTruthy();
  }));
});
