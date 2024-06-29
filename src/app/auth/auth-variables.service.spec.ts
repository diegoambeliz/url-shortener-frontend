import { TestBed } from '@angular/core/testing';

import { AuthVariablesService } from './auth-variables.service';

describe('AuthVariablesService', () => {
  let service: AuthVariablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthVariablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
