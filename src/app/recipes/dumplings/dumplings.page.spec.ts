import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DumplingsPage } from './dumplings.page';

describe('DumplingsPage', () => {
  let component: DumplingsPage;
  let fixture: ComponentFixture<DumplingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumplingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumplingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
