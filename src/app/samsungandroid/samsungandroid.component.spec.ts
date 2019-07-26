import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsungandroidComponent } from './samsungandroid.component';

describe('SamsungandroidComponent', () => {
  let component: SamsungandroidComponent;
  let fixture: ComponentFixture<SamsungandroidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamsungandroidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamsungandroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
