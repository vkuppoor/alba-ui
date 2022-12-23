import { TestBed } from '@angular/core/testing';

import { AlbaButtonService } from './alba-button.service';

describe('AlbaButtonService', () => {
  let service: AlbaButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbaButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
