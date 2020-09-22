import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseCompletionLandingComponent } from './case-completion-landing.component';

describe('CaseCompletionLandingComponent', () => {
  let component: CaseCompletionLandingComponent;
  let fixture: ComponentFixture<CaseCompletionLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseCompletionLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseCompletionLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
