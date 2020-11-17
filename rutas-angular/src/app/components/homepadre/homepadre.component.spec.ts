import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepadreComponent } from './homepadre.component';

describe('HomepadreComponent', () => {
  let component: HomepadreComponent;
  let fixture: ComponentFixture<HomepadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepadreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
