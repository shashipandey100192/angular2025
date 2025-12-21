import { TestBed } from '@angular/core/testing';

import { Generalservice } from './generalservice';

describe('Generalservice', () => {
  let service: Generalservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Generalservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
