import { TestBed } from '@angular/core/testing';

import { EubacteriaService } from './eubacteria.service';

describe('EubacteriaService', () => {
  let service: EubacteriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EubacteriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
