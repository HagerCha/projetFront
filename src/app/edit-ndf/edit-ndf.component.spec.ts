import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNDFComponent } from './edit-ndf.component';

describe('EditNDFComponent', () => {
  let component: EditNDFComponent;
  let fixture: ComponentFixture<EditNDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNDFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
