import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelEntryPage } from './fuel-entry.page';

describe('FuelEntryPage', () => {
  let component: FuelEntryPage;
  let fixture: ComponentFixture<FuelEntryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelEntryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
