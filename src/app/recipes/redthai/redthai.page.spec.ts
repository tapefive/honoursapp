import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedthaiPage } from './redthai.page';

describe('RedthaiPage', () => {
  let component: RedthaiPage;
  let fixture: ComponentFixture<RedthaiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedthaiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedthaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
