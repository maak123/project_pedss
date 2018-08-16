import { TestBed, inject } from '@angular/core/testing';

import { SubEventService } from './subevent.service';

describe('SubEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubEventService]
    });
  });

  it('should be created', inject([SubEventService], (service: SubEventService) => {
    expect(service).toBeTruthy();
  }));
});
