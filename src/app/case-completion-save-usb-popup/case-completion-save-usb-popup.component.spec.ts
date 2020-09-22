import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseCompletionSaveUsbPopupComponent } from './case-completion-save-usb-popup.component';

describe('CaseCompletionSaveUsbPopupComponent', () => {
  let component: CaseCompletionSaveUsbPopupComponent;
  let fixture: ComponentFixture<CaseCompletionSaveUsbPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseCompletionSaveUsbPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseCompletionSaveUsbPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
