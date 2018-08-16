import { TestBed, inject } from '@angular/core/testing';

import { FacSportCaptainService } from './fac-sport-captain.service';

describe('FacSportCaptainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacSportCaptainService]
    });
  });

  it('should be created', inject([FacSportCaptainService], (service: FacSportCaptainService) => {
    expect(service).toBeTruthy();
  }));
});
