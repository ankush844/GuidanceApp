import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-system-errors',
  templateUrl: './system-errors.component.html',
  styleUrls: ['./system-errors.component.css']
})
export class SystemErrorsComponent implements OnInit {
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
