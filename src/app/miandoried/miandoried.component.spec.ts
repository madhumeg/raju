import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiandoriedComponent } from './miandoried.component';

describe('MiandoriedComponent', () => {
  let component: MiandoriedComponent;
  let fixture: ComponentFixture<MiandoriedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiandoriedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiandoriedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
