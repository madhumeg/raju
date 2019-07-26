import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HometrendComponent } from './hometrend.component';

describe('HometrendComponent', () => {
  let component: HometrendComponent;
  let fixture: ComponentFixture<HometrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HometrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
