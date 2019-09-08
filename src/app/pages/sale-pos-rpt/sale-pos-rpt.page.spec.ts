import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePosRptPage } from './sale-pos-rpt.page';

describe('SalePosRptPage', () => {
  let component: SalePosRptPage;
  let fixture: ComponentFixture<SalePosRptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalePosRptPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalePosRptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
