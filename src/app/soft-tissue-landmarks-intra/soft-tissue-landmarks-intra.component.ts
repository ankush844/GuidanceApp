import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soft-tissue-landmarks-intra',
  templateUrl: './soft-tissue-landmarks-intra.component.html',
  styleUrls: ['./soft-tissue-landmarks-intra.component.css']
})
export class SoftTissueLandmarksIntraComponent implements OnInit {
  @Input() isNext: any;
  @Output() onNextRoute: EventEmitter<boolean> = new EventEmitter<boolean>();

  showHideButtons: boolean = false;
  isTabOne: boolean = true;
  isTabTwo: boolean;

  implantPlanId: any;
  patientId: any;
  patientName: any;

  tab1Images: any;
  tab2Images: any;

  firstCheck: boolean;

  distalMedial: boolean;
  posteriorMedial: boolean;
  distalLateral: boolean;
  posteriorLateral: boolean;

  isDistalMedialChecked: boolean = true;
  isPosteriorMedialChecked: boolean = true;
  isDistalLateralChecked: boolean = true;
  isPosteriorLateralChecked: boolean = true;

  mediaPiateau: boolean;
  lateralPiateau: boolean;

  isMediaPiateauChecked: boolean = true;
  isLateralPiateauChecked: boolean = true;


  tab1SuccessMsg: boolean;
  tab2SuccessMsg: boolean;
  tab3SuccessMsg: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.selectTab1();
    this.implantPlanId = localStorage.getItem('selectedImplantPlanId');
    this.patientId = localStorage.getItem('selectedPatientId');
    this.patientName = localStorage.getItem('selectedPatientName');
    this.tab1Images = 'soft_tissue_landmark_1.png';
    this.tab2Images = 'soft_tissue_landmark_5.png';
  }

  selectTab1() {
    this.isTabOne = true;
    this.isTabTwo = false;
    this.isDistalMedialChecked = true;
    this.isPosteriorLateralChecked = true;
    this.isDistalLateralChecked = true;
    this.isPosteriorMedialChecked = true;
    this.firstCheck = true;
    this.tab1Images = 'soft_tissue_landmark_1.png';

  }
  selectTab2() {
    this.isTabOne = false
    this.isTabTwo = true;
    this.isMediaPiateauChecked = true;
    this.isLateralPiateauChecked = true;
    this.firstCheck = true;
    this.tab2Images = 'soft_tissue_landmark_5.png';
  }

  checkedChangeTab1(event) {
    if (event.target.value == "distalMedial" && event.target.checked) {
      this.isDistalMedialChecked = false;
      this.isPosteriorLateralChecked = true;
      this.isDistalLateralChecked = true;
      this.isPosteriorMedialChecked = true;
      this.tab1Images = 'soft_tissue_landmark_1.png';
    }
    else if (event.target.value == "posteriorMedial" && event.target.checked) {
      this.isPosteriorMedialChecked = false;
      this.isDistalMedialChecked = true;
      this.isPosteriorLateralChecked = true;
      this.isDistalLateralChecked = true;
      this.tab1Images = 'soft_tissue_landmark_3.png';
      this.firstCheck = false;
    }
    else if (event.target.value == "distalLateral" && event.target.checked) {
      this.isPosteriorLateralChecked = true;
      this.isPosteriorMedialChecked = true;
      this.isDistalMedialChecked = true;
      this.isDistalLateralChecked = false
      this.tab1Images = 'soft_tissue_landmark_2.png';
      this.firstCheck = false;
    }
    else if (event.target.value == "posteriorLateral" && event.target.checked) {
      this.isPosteriorLateralChecked = false;
      this.isDistalMedialChecked = true;
      this.isPosteriorMedialChecked = true;
      this.isDistalLateralChecked = true
      this.tab1Images = 'soft_tissue_landmark_4.png';
      this.firstCheck = false;
    }
    else{
      this.isPosteriorLateralChecked = true;
      this.isDistalMedialChecked = true;
      this.isPosteriorMedialChecked = true;
      this.isDistalLateralChecked = true
      this.firstCheck = false;
    }
  }

  distalMedialCaptureCount: number = 0;
  distalMedialProgress: any = 0;
  posteriorMedialCaptureCount: number = 0;
  posteriorMedialProgress: any = 0;
  distalLateralCaptureCount: number = 0;
  distalLateralProgress: any = 0;
  posteriorLateralCaptureCount: number = 0;
  posteriorLateralProgress: any = 0
  onCaptureTab1() {
    if ((!this.isDistalMedialChecked || this.firstCheck) && !this.distalMedial) {

      this.distalMedialCaptureCount = this.distalMedialCaptureCount + 20;
      this.distalMedialProgress = this.distalMedialCaptureCount + '%';
      if (this.distalMedialCaptureCount == 100) {
        this.distalMedial = true;
      }
      // this.distalMedial = true;
    }
    if (!this.isPosteriorMedialChecked && !this.posteriorMedial) {
      this.posteriorMedialCaptureCount = this.posteriorMedialCaptureCount + 20;
      this.posteriorMedialProgress = this.posteriorMedialCaptureCount + '%';
      if (this.posteriorMedialCaptureCount == 100) {
        this.posteriorMedial = true;
      }
      // this.posteriorMedial = true;
    }
    if (!this.isDistalLateralChecked && !this.distalLateral) {
      this.distalLateralCaptureCount = this.distalLateralCaptureCount + 20;
      this.distalLateralProgress = this.distalLateralCaptureCount + '%';
      if (this.distalLateralCaptureCount == 100) {
        this.distalLateral = true;
      }
      // this.distalLateral = true;
    }
    if (!this.isPosteriorLateralChecked && !this.posteriorLateral) {
      this.posteriorLateralCaptureCount = this.posteriorLateralCaptureCount + 20;
      this.posteriorLateralProgress = this.posteriorLateralCaptureCount + '%';
      if (this.posteriorLateralCaptureCount == 100) {
        this.posteriorLateral = true;
      }
      // this.posteriorLateral = true;
    }

    if (this.distalMedial && this.posteriorMedial && this.distalLateral && this.posteriorLateral) {
      this.tab1SuccessMsg = true;
    }
    else {
      this.tab1SuccessMsg = false;
    }

  }
  onClearTab1() {
    if ((!this.isDistalMedialChecked || this.firstCheck) ) {
      this.distalMedialCaptureCount = 0;
      this.distalMedialProgress = this.distalMedialCaptureCount + '%';
      this.distalMedial = false;
    }
    if (!this.isPosteriorMedialChecked ) {
      this.posteriorMedialCaptureCount = 0;
      this.posteriorMedialProgress = this.posteriorMedialCaptureCount + '%';
      this.posteriorMedial = false;
    }
    if (!this.isDistalLateralChecked ) {
      this.distalLateralCaptureCount = 0;
      this.distalLateralProgress = this.distalLateralCaptureCount + '%';
      this.distalLateral = false;
    }
    if (!this.isPosteriorLateralChecked ) {
      this.posteriorLateralCaptureCount = 0;
      this.posteriorLateralProgress = this.posteriorLateralCaptureCount + '%';
      this.posteriorLateral = false;
    }
    if (this.distalMedial && this.posteriorMedial && this.distalLateral && this.posteriorLateral) {
      this.tab1SuccessMsg = true;
    }
    else {
      this.tab1SuccessMsg = false;
    }
  }

  onClearAllFemur() {
    this.distalMedial = false;
    this.posteriorMedial = false;
    this.distalLateral = false;
    this.posteriorLateral = false;

    this.distalMedialCaptureCount = 0;
    this.distalMedialProgress = this.distalMedialCaptureCount + '%';
    this.posteriorMedialCaptureCount = 0;
      this.posteriorMedialProgress = this.posteriorMedialCaptureCount + '%';
      this.distalLateralCaptureCount = 0;
      this.distalLateralProgress = this.distalLateralCaptureCount + '%';
      this.posteriorLateralCaptureCount = 0;
      this.posteriorLateralProgress = this.posteriorLateralCaptureCount + '%';

    this.isDistalMedialChecked = true;
    this.isPosteriorLateralChecked = true;
    this.isDistalLateralChecked = true;
    this.isPosteriorMedialChecked = true;
    this.firstCheck = true;
    this.tab1Images = 'soft_tissue_landmark_1.png';

    if (this.distalMedial && this.posteriorMedial && this.distalLateral && this.posteriorLateral) {
      this.tab1SuccessMsg = true;
    }
    else {
      this.tab1SuccessMsg = false;
    }
  }


  checkedChangeTab2(event) {
    if (event.target.value == "mediaPiateau" && event.target.checked) {
      this.isMediaPiateauChecked = false;
      this.isLateralPiateauChecked = true;
      this.tab2Images = 'soft_tissue_landmark_5.png';
      this.firstCheck = true;
    }
    else if (event.target.value == "lateralPiateau" && event.target.checked) {
      this.isLateralPiateauChecked = false;
      this.isMediaPiateauChecked = true;
      this.tab2Images = 'soft_tissue_landmark_6.png';
      this.firstCheck = false;
    }
    else{
      this.isLateralPiateauChecked = true;
      this.isMediaPiateauChecked = true;
      this.firstCheck = false;
    }
  }

  mediaPiateauCaptureCount: number = 0;
  mediaPiateauProgress: any =0;
  lateralPiateauCaptureCount: number = 0;
  lateralPiateauProgress: any = 0;

  onCaptureTab2() {
    if ((!this.isMediaPiateauChecked || this.firstCheck) && !this.mediaPiateau) {
      this.mediaPiateauCaptureCount = this.mediaPiateauCaptureCount + 20;
      this.mediaPiateauProgress = this.mediaPiateauCaptureCount + '%';
      if (this.mediaPiateauCaptureCount == 100) {
        this.mediaPiateau = true;
      }
      // this.mediaPiateau = true;
    }
    if (!this.isLateralPiateauChecked && !this.lateralPiateau) {
      this.lateralPiateauCaptureCount = this.lateralPiateauCaptureCount + 20;
      this.lateralPiateauProgress = this.lateralPiateauCaptureCount + '%';
      if (this.lateralPiateauCaptureCount == 100) {
        this.lateralPiateau = true;
      }
      // this.lateralPiateau = true;
    }

    if (this.mediaPiateau && this.lateralPiateau) {
      this.tab2SuccessMsg = true;
    }
    else {
      this.tab2SuccessMsg = false;
    }

  }
  onClearTab2() {
    if ((!this.isMediaPiateauChecked || this.firstCheck) ) {
      this.mediaPiateauCaptureCount = 0;
      this.mediaPiateauProgress = this.mediaPiateauCaptureCount + '%';
      this.mediaPiateau = false;
    }
    if (!this.isLateralPiateauChecked ) {
      this.lateralPiateauCaptureCount = 0;
      this.lateralPiateauProgress = this.lateralPiateauCaptureCount + '%';
      this.lateralPiateau = false;
    }
    if (this.mediaPiateau && this.lateralPiateau) {
      this.tab2SuccessMsg = true;
    }
    else {
      this.tab2SuccessMsg = false;
    }
  }

  onClearAllTibia() {
    this.mediaPiateau = false;
    this.lateralPiateau = false;

    this.mediaPiateauCaptureCount = 0;
    this.mediaPiateauProgress = this.mediaPiateauCaptureCount + '%';
    this.lateralPiateauCaptureCount = 0;
    this.lateralPiateauProgress = this.lateralPiateauCaptureCount + '%';

    this.isMediaPiateauChecked = true;
    this.isLateralPiateauChecked = true;
    this.firstCheck = true;
    this.tab2Images = 'soft_tissue_landmark_5.png';

    if (this.mediaPiateau && this.lateralPiateau) {
      this.tab2SuccessMsg = true;
    }
    else {
      this.tab2SuccessMsg = false;
    }
  }


  onNext() {
    this.isNext = true
    this.onNextRoute.emit(this.isNext);
  }
  onPrev() {
    this.router.navigate(["/header/implant-details/joint-assesment"])
  }

}
