import { TestBed } from '@angular/core/testing';

import { CoronaAPIService } from './corona-api.service';

describe('CoronaAPIService', () => {
  let service: CoronaAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronaAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
