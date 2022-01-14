import { TestBed } from '@angular/core/testing';

import { PatientLoginServiceService } from './patient-login-service.service';

describe('PatientLoginServiceService', () => {
  let service: PatientLoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientLoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
