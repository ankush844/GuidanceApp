import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseCompletionDisconnectComponent } from './case-completion-disconnect.component';

describe('CaseCompletionDisconnectComponent', () => {
  let component: CaseCompletionDisconnectComponent;
  let fixture: ComponentFixture<CaseCompletionDisconnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseCompletionDisconnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseCompletionDisconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
