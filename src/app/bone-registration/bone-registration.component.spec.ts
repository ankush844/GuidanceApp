import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoneRegistrationComponent } from './bone-registration.component';

describe('BoneRegistrationComponent', () => {
  let component: BoneRegistrationComponent;
  let fixture: ComponentFixture<BoneRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoneRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoneRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
