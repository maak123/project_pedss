import { TestBed, inject } from '@angular/core/testing';

import { TeamcardService } from './teamcard.service';

describe('TeamcardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamcardService]
    });
  });

  it('should be created', inject([TeamcardService], (service: TeamcardService) => {
    expect(service).toBeTruthy();
  }));
});
