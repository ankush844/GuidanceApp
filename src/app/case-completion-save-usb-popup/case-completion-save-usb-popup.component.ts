import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-case-completion-save-usb-popup',
  templateUrl: './case-completion-save-usb-popup.component.html',
  styleUrls: ['./case-completion-save-usb-popup.component.css']
})
export class CaseCompletionSaveUsbPopupComponent implements OnInit {
  @Input() display: boolean = false;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onHide() {
    this.display = false;
    this.onClose.emit(this.display);
  }

}
