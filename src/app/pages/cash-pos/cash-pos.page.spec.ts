import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPosPage } from './cash-pos.page';

describe('CashPosPage', () => {
  let component: CashPosPage;
  let fixture: ComponentFixture<CashPosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashPosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashPosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
