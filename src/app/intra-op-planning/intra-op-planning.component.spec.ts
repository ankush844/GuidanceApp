import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntraOpPlanningComponent } from './intra-op-planning.component';

describe('IntraOpPlanningComponent', () => {
  let component: IntraOpPlanningComponent;
  let fixture: ComponentFixture<IntraOpPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntraOpPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntraOpPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
