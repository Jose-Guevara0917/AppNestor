import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClsComponent } from './cls.component';

describe('ClsComponent', () => {
  let component: ClsComponent;
  let fixture: ComponentFixture<ClsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
