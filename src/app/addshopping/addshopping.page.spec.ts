import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshoppingPage } from './addshopping.page';

describe('AddshoppingPage', () => {
  let component: AddshoppingPage;
  let fixture: ComponentFixture<AddshoppingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddshoppingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddshoppingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
