import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-case-completion-disconnect',
  templateUrl: './case-completion-disconnect.component.html',
  styleUrls: ['./case-completion-disconnect.component.css']
})
export class CaseCompletionDisconnectComponent implements OnInit {
  @Output() onPreviousRoute: EventEmitter<boolean> = new EventEmitter<boolean>();

  isMountEndEffector: boolean;
  isIrrigation: boolean;
  isBobeTracker: boolean;
  isCheckpoints: boolean;

  constructor(private router: Router) { }


  ngOnInit() {
  }

  onPrev() {
    // this.router.navigate(["/header/implant-details/joint-assesment"])
    this.onPreviousRoute.emit();
  }

  onMountConfirm() {
    this.isMountEndEffector = true;
  }
  onIrrigationConfirm() {
    this.isIrrigation = true;
  }
  onTrackerConfirm() {
    this.isBobeTracker = true;
  }
  onCheckPointConfirm() {
    this.isCheckpoints = true;
  }

  onExit(){
    this.router.navigate(["/header/home"])
  }

}
