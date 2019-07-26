import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidetComponent } from './midet.component';

describe('MidetComponent', () => {
  let component: MidetComponent;
  let fixture: ComponentFixture<MidetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
