import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplantPlanCloudComponent } from './implant-plan-cloud.component';

describe('ImplantPlanCloudComponent', () => {
  let component: ImplantPlanCloudComponent;
  let fixture: ComponentFixture<ImplantPlanCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplantPlanCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplantPlanCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
