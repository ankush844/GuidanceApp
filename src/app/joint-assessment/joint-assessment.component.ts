import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joint-assessment',
  templateUrl: './joint-assessment.component.html',
  styleUrls: ['./joint-assessment.component.css']
})
export class JointAssessmentComponent implements OnInit {
  implantPlanId: any;
  patientId: any;
  patientName: any;

  posesSize: number=1;

  constructor(private router: Router) { }

  ngOnInit() {
    this.implantPlanId = localStorage.getItem('selectedImplantPlanId');
    this.patientId = localStorage.getItem('selectedPatientId');
    this.patientName = localStorage.getItem('selectedPatientName');
  }

  decPoses(){
    if(this.posesSize==1){
      this.posesSize
    }
    else{
      this.posesSize = this.posesSize - 1;
    }
  }
  incPoses(){
      this.posesSize = this.posesSize + 1;
  }

  onNext(){
    this.router.navigate(["/header/implant-details/intra-op-planning"])
  }
  onPrev(){
    this.router.navigate(["/header/implant-details/bone-registration"])
  }

}
