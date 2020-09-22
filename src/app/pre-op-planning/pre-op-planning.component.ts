import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-op-planning',
  templateUrl: './pre-op-planning.component.html',
  styleUrls: ['./pre-op-planning.component.css']
})
export class PreOpPlanningComponent implements OnInit {
  implantPlanId: any;
  patientId: any;
  patientName: any;

  femurSize: number = 1;
  tibiaSize: number = 1;
  thickness: number = 6;

  constructor(private router: Router) { }

  ngOnInit() {
    this.implantPlanId = localStorage.getItem('selectedImplantPlanId');
    this.patientId = localStorage.getItem('selectedPatientId');
    this.patientName = localStorage.getItem('selectedPatientName');
  }
  decFemurSize() {
    if (this.femurSize == 1) {
      this.femurSize
    }
    else {
      this.femurSize = this.femurSize - 1;
    }
  }
  incFemurSize() {
    if (this.femurSize == 6) {
      this.femurSize
    }
    else {
      this.femurSize = this.femurSize + 1;
    }
  }

  decTibiaSize() {
    if (this.tibiaSize == 1) {
      this.tibiaSize
    }
    else {
      this.tibiaSize = this.tibiaSize - 1;
    }
  }
  incTibiaSize() {
    if (this.tibiaSize == 6) {
      this.tibiaSize
    }
    else {
      this.tibiaSize = this.tibiaSize + 1;
    }
  }

  decThickness() {
    if (this.thickness == 6) {
      this.thickness
    }
    else {
      this.thickness = this.thickness - 2;
    }

  }
  incThickness() {
    if (this.thickness == 14) {
      this.thickness
    }
    else {
      this.thickness = this.thickness + 2;
    }
  }
  onNext() {
    this.router.navigate(["/header/implant-details/system-setup"])
  }
  onPrev() {
    this.router.navigate(["/header/home"])
  }

}
