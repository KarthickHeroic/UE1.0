import { TestBed } from '@angular/core/testing';

import { ConStringService } from './con-string.service';

describe('ConStringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConStringService = TestBed.get(ConStringService);
    expect(service).toBeTruthy();
  });
});
