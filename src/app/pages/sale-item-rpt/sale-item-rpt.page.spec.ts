import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleItemRptPage } from './sale-item-rpt.page';

describe('SaleItemRptPage', () => {
  let component: SaleItemRptPage;
  let fixture: ComponentFixture<SaleItemRptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleItemRptPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleItemRptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
