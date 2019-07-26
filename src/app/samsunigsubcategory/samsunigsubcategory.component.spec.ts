import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsunigsubcategoryComponent } from './samsunigsubcategory.component';

describe('SamsunigsubcategoryComponent', () => {
  let component: SamsunigsubcategoryComponent;
  let fixture: ComponentFixture<SamsunigsubcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamsunigsubcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamsunigsubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
