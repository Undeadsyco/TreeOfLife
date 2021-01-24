import { TestBed } from '@angular/core/testing';

import { SecondaryButtonsService } from './secondary-buttons.service';

describe('SecondaryButtonsService', () => {
  let service: SecondaryButtonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondaryButtonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
