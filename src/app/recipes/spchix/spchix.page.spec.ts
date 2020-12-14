import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpchixPage } from './spchix.page';

describe('SpchixPage', () => {
  let component: SpchixPage;
  let fixture: ComponentFixture<SpchixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpchixPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpchixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
