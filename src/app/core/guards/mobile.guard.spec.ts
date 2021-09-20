import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MobileGuard } from './mobile.guard';

describe('MobileGuard', () => {
  let guard: MobileGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ]
    });
    guard = TestBed.inject(MobileGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
