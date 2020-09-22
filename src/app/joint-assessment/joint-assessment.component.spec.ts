import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JointAssessmentComponent } from './joint-assessment.component';

describe('JointAssessmentComponent', () => {
  let component: JointAssessmentComponent;
  let fixture: ComponentFixture<JointAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JointAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JointAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
