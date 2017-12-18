import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Seq1Component } from './seq1.component';

describe('Seq1Component', () => {
  let component: Seq1Component;
  let fixture: ComponentFixture<Seq1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seq1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Seq1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
