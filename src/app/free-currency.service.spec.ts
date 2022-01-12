import { TestBed } from '@angular/core/testing';

import { FreeCurrencyService } from './free-currency.service';

describe('FreeCurrencyService', () => {
  let service: FreeCurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeCurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
