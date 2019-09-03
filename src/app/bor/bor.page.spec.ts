import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorPage } from './bor.page';

describe('BorPage', () => {
  let component: BorPage;
  let fixture: ComponentFixture<BorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
