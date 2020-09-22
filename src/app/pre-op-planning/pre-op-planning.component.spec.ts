import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreOpPlanningComponent } from './pre-op-planning.component';

describe('PreOpPlanningComponent', () => {
  let component: PreOpPlanningComponent;
  let fixture: ComponentFixture<PreOpPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreOpPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreOpPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
