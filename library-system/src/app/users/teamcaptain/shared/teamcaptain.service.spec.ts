import { TestBed, inject } from '@angular/core/testing';

import { TeamcaptainService } from './teamcaptain.service';

describe('TeamcaptainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamcaptainService]
    });
  });

  it('should be created', inject([TeamcaptainService], (service: TeamcaptainService) => {
    expect(service).toBeTruthy();
  }));
});
