import { TestBed } from '@angular/core/testing';

import { CheckoutStepService } from './checkout-step.service';

describe('CheckoutStepService', () => {
  let service: CheckoutStepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckoutStepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
