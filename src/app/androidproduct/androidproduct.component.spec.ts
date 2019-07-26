import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidproductComponent } from './androidproduct.component';

describe('AndroidproductComponent', () => {
  let component: AndroidproductComponent;
  let fixture: ComponentFixture<AndroidproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
