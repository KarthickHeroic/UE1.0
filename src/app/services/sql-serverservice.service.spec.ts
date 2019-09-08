import { TestBed } from '@angular/core/testing';

import { SqlServerserviceService } from './sql-serverservice.service';

describe('SqlServerserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SqlServerserviceService = TestBed.get(SqlServerserviceService);
    expect(service).toBeTruthy();
  });
});
