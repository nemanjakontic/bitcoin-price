import { TestBed } from '@angular/core/testing';
import { LoadingService } from '../loader/loading.service';

import { HttpRequestInterceptor } from './http-request.interceptor';

describe('HttpRequestInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HttpRequestInterceptor, LoadingService],
    })
  );

  it('should be created', () => {
    const interceptor: HttpRequestInterceptor = TestBed.inject(
      HttpRequestInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
