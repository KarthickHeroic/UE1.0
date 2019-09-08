import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleItemPage } from './sale-item.page';

describe('SaleItemPage', () => {
  let component: SaleItemPage;
  let fixture: ComponentFixture<SaleItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
