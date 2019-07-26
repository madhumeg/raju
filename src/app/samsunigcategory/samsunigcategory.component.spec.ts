import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsunigcategoryComponent } from './samsunigcategory.component';

describe('SamsunigcategoryComponent', () => {
  let component: SamsunigcategoryComponent;
  let fixture: ComponentFixture<SamsunigcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamsunigcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamsunigcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
