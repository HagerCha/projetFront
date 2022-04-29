import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeNDFComponent } from './demande-ndf.component';

describe('DemandeNDFComponent', () => {
  let component: DemandeNDFComponent;
  let fixture: ComponentFixture<DemandeNDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeNDFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeNDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
