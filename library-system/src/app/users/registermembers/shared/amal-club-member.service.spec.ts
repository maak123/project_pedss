import { TestBed, inject } from '@angular/core/testing';

import { AmalClubMemberService } from './amal-club-member.service';

describe('AmalClubMemberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmalClubMemberService]
    });
  });

  it('should be created', inject([AmalClubMemberService], (service: AmalClubMemberService) => {
    expect(service).toBeTruthy();
  }));
});
