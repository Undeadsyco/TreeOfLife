import { TestBed } from '@angular/core/testing';

import { PrimeButtonsService } from './prime-buttons.service';

describe('PrimeButtonsService', () => {
  let service: PrimeButtonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimeButtonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
