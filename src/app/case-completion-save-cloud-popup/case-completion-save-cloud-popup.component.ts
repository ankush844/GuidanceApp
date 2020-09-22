import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-case-completion-save-cloud-popup',
  templateUrl: './case-completion-save-cloud-popup.component.html',
  styleUrls: ['./case-completion-save-cloud-popup.component.css']
})
export class CaseCompletionSaveCloudPopupComponent implements OnInit {
  @Input() display: boolean = false;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() isNext: any;
  @Output() onNextRoute: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onHide() {
    this.display = false;
    this.onClose.emit(this.display);
  }

  onNext() {
    this.isNext = false
    this.onNextRoute.emit(this.isNext);
    this.onHide();
  }

}
