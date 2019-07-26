import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenvoComponent } from './lenvo.component';

describe('LenvoComponent', () => {
  let component: LenvoComponent;
  let fixture: ComponentFixture<LenvoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenvoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
