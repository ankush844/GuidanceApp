import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-intr-op-planning-main',
  templateUrl: './intr-op-planning-main.component.html',
  styleUrls: ['./intr-op-planning-main.component.css']
})
export class IntrOpPlanningMainComponent implements OnInit {
  isNext: boolean;
  isSoftTissueLandmark: boolean;
  isIntraOpPlanning: boolean;
  currentUrl: any;
  previousUrl: any;
  constructor(private router: Router) {
  
  }

  ngOnInit() {    
    if (this.isIntraOpPlanning) {
      this.isNext = true;
    }
    else {
      this.isNext = false;
    }
  }

  onNext() {
    this.isNext = true;
    this.isSoftTissueLandmark = true;
    this.isIntraOpPlanning = false;
  }
  onPrev() {
    this.isNext = false;
    this.isIntraOpPlanning = true;
    this.isSoftTissueLandmark = false;
  }
}
