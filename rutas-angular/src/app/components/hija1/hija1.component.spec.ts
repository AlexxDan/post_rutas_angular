import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hija1Component } from './hija1.component';

describe('Hija1Component', () => {
  let component: Hija1Component;
  let fixture: ComponentFixture<Hija1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hija1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hija1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
