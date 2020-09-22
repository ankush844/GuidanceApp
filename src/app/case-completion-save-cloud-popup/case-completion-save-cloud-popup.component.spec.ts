import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseCompletionSaveCloudPopupComponent } from './case-completion-save-cloud-popup.component';

describe('CaseCompletionSaveCloudPopupComponent', () => {
  let component: CaseCompletionSaveCloudPopupComponent;
  let fixture: ComponentFixture<CaseCompletionSaveCloudPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseCompletionSaveCloudPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseCompletionSaveCloudPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
