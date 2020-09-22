import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseCompletionDisconnectExitComponent } from './case-completion-disconnect-exit.component';

describe('CaseCompletionDisconnectExitComponent', () => {
  let component: CaseCompletionDisconnectExitComponent;
  let fixture: ComponentFixture<CaseCompletionDisconnectExitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseCompletionDisconnectExitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseCompletionDisconnectExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
