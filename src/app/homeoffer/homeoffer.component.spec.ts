import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeofferComponent } from './homeoffer.component';

describe('HomeofferComponent', () => {
  let component: HomeofferComponent;
  let fixture: ComponentFixture<HomeofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
