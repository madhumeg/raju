import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrigerComponent } from './refriger.component';

describe('RefrigerComponent', () => {
  let component: RefrigerComponent;
  let fixture: ComponentFixture<RefrigerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefrigerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrigerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
