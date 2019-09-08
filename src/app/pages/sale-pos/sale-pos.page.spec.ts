import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePosPage } from './sale-pos.page';

describe('SalePosPage', () => {
  let component: SalePosPage;
  let fixture: ComponentFixture<SalePosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalePosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalePosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
