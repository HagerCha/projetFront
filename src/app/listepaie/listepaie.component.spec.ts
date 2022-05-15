import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepaieComponent } from './listepaie.component';

describe('ListepaieComponent', () => {
  let component: ListepaieComponent;
  let fixture: ComponentFixture<ListepaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListepaieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListepaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
