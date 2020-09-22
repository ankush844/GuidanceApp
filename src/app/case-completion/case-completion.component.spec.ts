import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseCompletionComponent } from './case-completion.component';

describe('CaseCompletionComponent', () => {
  let component: CaseCompletionComponent;
  let fixture: ComponentFixture<CaseCompletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseCompletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
