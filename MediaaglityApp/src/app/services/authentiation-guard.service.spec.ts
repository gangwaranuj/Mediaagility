import { TestBed } from '@angular/core/testing';

import { AuthentiationGuardService } from './authentiation-guard.service';

describe('AuthentiationGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthentiationGuardService = TestBed.get(AuthentiationGuardService);
    expect(service).toBeTruthy();
  });
});
