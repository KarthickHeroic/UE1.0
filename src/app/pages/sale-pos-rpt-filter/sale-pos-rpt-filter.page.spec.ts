import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePosRptFilterPage } from './sale-pos-rpt-filter.page';

describe('SalePosRptFilterPage', () => {
  let component: SalePosRptFilterPage;
  let fixture: ComponentFixture<SalePosRptFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalePosRptFilterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalePosRptFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
