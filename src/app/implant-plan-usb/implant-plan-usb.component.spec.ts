import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplantPlanUsbComponent } from './implant-plan-usb.component';

describe('ImplantPlanUsbComponent', () => {
  let component: ImplantPlanUsbComponent;
  let fixture: ComponentFixture<ImplantPlanUsbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplantPlanUsbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplantPlanUsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
