import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftPosRptPage } from './shift-pos-rpt.page';

describe('ShiftPosRptPage', () => {
  let component: ShiftPosRptPage;
  let fixture: ComponentFixture<ShiftPosRptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftPosRptPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftPosRptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
