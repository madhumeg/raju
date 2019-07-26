import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsungnormalComponent } from './samsungnormal.component';

describe('SamsungnormalComponent', () => {
  let component: SamsungnormalComponent;
  let fixture: ComponentFixture<SamsungnormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamsungnormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamsungnormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
