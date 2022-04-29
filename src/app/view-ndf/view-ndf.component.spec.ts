import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNDFComponent } from './view-ndf.component';

describe('ViewNDFComponent', () => {
  let component: ViewNDFComponent;
  let fixture: ComponentFixture<ViewNDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNDFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
