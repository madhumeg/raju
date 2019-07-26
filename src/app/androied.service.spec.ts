import { TestBed } from '@angular/core/testing';

import { AndroiedService } from './androied.service';

describe('AndroiedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AndroiedService = TestBed.get(AndroiedService);
    expect(service).toBeTruthy();
  });
});
