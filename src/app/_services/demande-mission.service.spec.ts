import { TestBed } from '@angular/core/testing';

import { DemandeMissionService } from './demande-mission.service';

describe('DemandeMissionService', () => {
  let service: DemandeMissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeMissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
