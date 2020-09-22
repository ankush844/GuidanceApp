import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-completion-landing',
  templateUrl: './case-completion-landing.component.html',
  styleUrls: ['./case-completion-landing.component.css']
})
export class CaseCompletionLandingComponent implements OnInit {
  isNext: boolean;
  isCaseCompletion: boolean;
  isCaseDisconnect: boolean;
  currentUrl: any;
  previousUrl: any;

  constructor() { }

  ngOnInit() {
  }

  onNext() {
    this.isNext = true;
    this.isCaseCompletion = true;
    this.isCaseDisconnect = false;
  }
  onPrev() {
    this.isNext = false;
    this.isCaseDisconnect = true;
    this.isCaseCompletion = false;
  }

  onNextPage(){
    this.isNext = true;
  }

}
