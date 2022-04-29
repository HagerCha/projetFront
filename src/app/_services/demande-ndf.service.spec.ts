import { TestBed } from '@angular/core/testing';

import { DemandeNDFService } from './demande-ndf.service';

describe('DemandeNDFService', () => {
  let service: DemandeNDFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeNDFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
