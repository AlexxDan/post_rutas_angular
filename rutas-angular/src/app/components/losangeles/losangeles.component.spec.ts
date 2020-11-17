import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LosangelesComponent } from './losangeles.component';

describe('LosangelesComponent', () => {
  let component: LosangelesComponent;
  let fixture: ComponentFixture<LosangelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LosangelesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LosangelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
