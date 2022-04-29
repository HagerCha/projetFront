import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeNDFComponent } from './liste-ndf.component';

describe('ListeNDFComponent', () => {
  let component: ListeNDFComponent;
  let fixture: ComponentFixture<ListeNDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeNDFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeNDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
