import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTimeoutComponent } from './patient-timeout.component';

describe('PatientTimeoutComponent', () => {
  let component: PatientTimeoutComponent;
  let fixture: ComponentFixture<PatientTimeoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientTimeoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientTimeoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
