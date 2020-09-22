import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bone-preparation',
  templateUrl: './bone-preparation.component.html',
  styleUrls: ['./bone-preparation.component.css']
})
export class BonePreparationComponent implements OnInit {
  implantPlanId: any;
  patientId: any;
  patientName: any;

  surgenPopup: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.implantPlanId = localStorage.getItem('selectedImplantPlanId');
    this.patientId = localStorage.getItem('selectedPatientId');
    this.patientName = localStorage.getItem('selectedPatientName');
    this.surgenPopup = true;
  }
  onNext(){
    // this.surgenPopup = true;
   this.router.navigate(["/header/implant-details/case-completion"])
  }
  onPrev(){
    this.router.navigate(["/header/implant-details/intra-op-planning"])
  }

  onAgree(){
    this.surgenPopup = false;
    // this.router.navigate(["/header/implant-details/case-completion"])
  }
  onClose(){
    this.surgenPopup = false;
    this.router.navigate(["/header/implant-details/joint-assesment"])
  }

}
