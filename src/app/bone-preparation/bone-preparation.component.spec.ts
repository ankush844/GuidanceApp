import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonePreparationComponent } from './bone-preparation.component';

describe('BonePreparationComponent', () => {
  let component: BonePreparationComponent;
  let fixture: ComponentFixture<BonePreparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonePreparationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonePreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
