import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftPosPage } from './shift-pos.page';

describe('ShiftPosPage', () => {
  let component: ShiftPosPage;
  let fixture: ComponentFixture<ShiftPosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftPosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftPosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
