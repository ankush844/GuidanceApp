import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrOpPlanningMainComponent } from './intr-op-planning-main.component';

describe('IntrOpPlanningMainComponent', () => {
  let component: IntrOpPlanningMainComponent;
  let fixture: ComponentFixture<IntrOpPlanningMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrOpPlanningMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrOpPlanningMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
