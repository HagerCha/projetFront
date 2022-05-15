import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemanagerComponent } from './listemanager.component';

describe('ListemanagerComponent', () => {
  let component: ListemanagerComponent;
  let fixture: ComponentFixture<ListemanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListemanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
