import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bone-registration',
  templateUrl: './bone-registration.component.html',
  styleUrls: ['./bone-registration.component.css']
})
export class BoneRegistrationComponent implements OnInit {
  showHideButtons: boolean = false;
  isTabOne: boolean = true;
  isTabTwo: boolean;
  isTabThree: boolean;

  implantPlanId: any;
  patientId: any;
  patientName: any;

  hipCenter: boolean;
  medialMalleous: boolean;
  lateralMalleous: boolean;

  tab1FirstImage: any;
  tab2FirstImage: any;
  tab3FirstImage: any;

  isRotateImg: boolean = true;
  firstCheck: boolean;

  isHipCenterChecked: boolean = true;
  isMedialMalleousChecked: boolean = true;
  isLateralMalleousChecked: boolean = true;

  isFemurChecked: boolean = true;
  isTibiaChecked: boolean = true;
  tibia: boolean;
  femur: boolean;

  isTab3FemurChecked: boolean = true;
  isTab3TibiaChecked: boolean = true;
  isTab3FemurDone: boolean = true;
  isTab3TibiaDone: boolean = true;
  tibiaTab3: boolean;
  femurTab3: boolean;

  isStep1GotIt: boolean;
  isStep2GotIt: boolean;
  isStep3GotIt: boolean;

  tab1SuccessMsg: boolean;
  tab2SuccessMsg: boolean;
  tab3SuccessMsg: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.selectTab1();
    this.implantPlanId = localStorage.getItem('selectedImplantPlanId');
    this.patientId = localStorage.getItem('selectedPatientId');
    this.patientName = localStorage.getItem('selectedPatientName');
    this.tab1FirstImage = 'tab1-img1.png';
    this.tab2FirstImage = 'tab2-img1.png';
    this.tab3FirstImage = 'tab3-img1.png';

  }
  selectTab1() {
    this.isTabOne = true;
    this.isTabTwo = false;
    this.isTabThree = false;
    this.isStep1GotIt = true;
    this.isStep2GotIt = false;
    this.isStep3GotIt = false;

    this.isHipCenterChecked = true;
    this.isMedialMalleousChecked = true;
    this.isLateralMalleousChecked = true
    this.tab1FirstImage = 'tab1-img1.png';
    this.firstCheck = false;
  }
  selectTab2() {
    this.isTabOne = false
    this.isTabTwo = true;
    this.isTabThree = false;
    this.isStep1GotIt = false;
    this.isStep2GotIt = true;
    this.isStep3GotIt = false;

    this.isFemurChecked = true;
    this.isTibiaChecked = true;
    this.tab2FirstImage = 'tab2-img1.png';
    this.firstCheck = false;
  }
  selectTab3() {
    this.isTabOne = false
    this.isTabTwo = false;
    this.isTabThree = true;
    this.isStep1GotIt = false;
    this.isStep2GotIt = false;
    this.isStep3GotIt = true;
    this.isTab3TibiaChecked = true;
    this.isTab3FemurChecked = true;
    this.tab3FirstImage = 'tab3-img1.png';
    this.firstCheck = false;
  }

  onStep1WorkFlow() {
    this.isStep1GotIt = true;
    this.isStep2GotIt = false;
    this.isStep3GotIt = false;
  }
  onStep2WorkFlow() {
    this.isStep1GotIt = false;
    this.isStep2GotIt = true;
    this.isStep3GotIt = false;
  }
  onStep3WorkFlow() {
    this.isStep1GotIt = false;
    this.isStep2GotIt = false;
    this.isStep3GotIt = true;
  }


  checkedChangeTab1(event) {
    if (event.target.value == "hipCenter" && event.target.checked) {
      this.isHipCenterChecked = false;
      this.isMedialMalleousChecked = true;
      this.isLateralMalleousChecked = true
      this.isRotateImg = true;
      this.tab1FirstImage = 'tab1-img1.png';
      this.firstCheck = true;
    }
    else if (event.target.value == "medialMalleous" && event.target.checked) {
      this.isMedialMalleousChecked = false;
      this.isHipCenterChecked = true;
      this.isLateralMalleousChecked = true
      this.isRotateImg = false;
      this.tab1FirstImage = 'tab1-img2.png';
      this.firstCheck = false;
    }
    else if (event.target.value == "lateralMalleous" && event.target.checked) {
      this.isMedialMalleousChecked = true;
      this.isHipCenterChecked = true;
      this.isLateralMalleousChecked = false
      this.isRotateImg = false;
      this.tab1FirstImage = 'tab1-img3.png';
      this.firstCheck = false;
    }
    else {
      this.isMedialMalleousChecked = true;
      this.isHipCenterChecked = true;
      this.isLateralMalleousChecked = true
      this.firstCheck = false;
    }
  }
  hipCaptureCount: number = 0;
  hipProgress: any = 0;
  onCapture() {
    if ((!this.isHipCenterChecked || this.firstCheck) && !this.hipCenter) {
      this.hipCaptureCount = this.hipCaptureCount + 20;
      this.hipProgress = this.hipCaptureCount+'%';
      if (this.hipCaptureCount == 100) {
        this.hipCenter = true;
      }

    }
    if (!this.isMedialMalleousChecked && !this.medialMalleous) {
      this.medialMalleous = true;
    }
    if (!this.isLateralMalleousChecked && !this.lateralMalleous) {
      this.lateralMalleous = true;
    }

    if (this.hipCenter && this.medialMalleous && this.lateralMalleous) {
      this.tab1SuccessMsg = true;
    }
    else {
      this.tab1SuccessMsg = false;
    }

  }
  onClear() {
    if ((!this.isHipCenterChecked || this.firstCheck)) {
      this.hipCaptureCount = 0;
      this.hipProgress = this.hipCaptureCount+'%';
      this.hipCenter = false;
    }
    if (!this.isMedialMalleousChecked ) {
      this.medialMalleous = false;
    }
    if (!this.isLateralMalleousChecked) {
      this.lateralMalleous = false;
    }
    if (this.hipCenter && this.medialMalleous && this.lateralMalleous) {
      this.tab1SuccessMsg = true;
    }
    else {
      this.tab1SuccessMsg = false;
    }
  }


  checkedChangeTab2(event) {
    if (event.target.value == "femur" && event.target.checked) {
      this.isFemurChecked = false;
      this.isTibiaChecked = true;
      this.tab2FirstImage = 'tab2-img1.png';
      this.firstCheck = true;
    }
    else if (event.target.value == "tibia" && event.target.checked) {
      this.isTibiaChecked = false;
      this.isFemurChecked = true;
      this.tab2FirstImage = 'tab2-img2.png';
      this.firstCheck = false;
    }
    else{
      this.isTibiaChecked = true;
      this.isFemurChecked = true;
      this.firstCheck = false;
    }
  }
  onVerifyCheckPointsTab2() {
    if ((!this.isFemurChecked || this.firstCheck) && !this.femur) {
      this.femur = true;
    }
    if (!this.isTibiaChecked && !this.tibia) {
      this.tibia = true;
    }
    if (this.femur && this.tibia) {
      this.tab2SuccessMsg = true;
    }
    else {
      this.tab2SuccessMsg = false;
    }
  }
  onClearCheckPointTab2() {
    if ((!this.isFemurChecked || this.firstCheck) && this.femur) {
      this.femur = false;
    }
    if (!this.isTibiaChecked && this.tibia) {
      this.tibia = false;
    }
    if (this.femur && this.tibia) {
      this.tab2SuccessMsg = true;
    }
    else {
      this.tab2SuccessMsg = false;
    }
  }

  checkedChangeTab3(event) {
    if (event.target.value == "femurTab3" && event.target.checked) {
      this.isTab3FemurChecked = false;
      this.isTab3TibiaChecked = true;
      this.tab3FirstImage = 'tab3-img1.png';
      this.firstCheck = true;
    }
    else if (event.target.value == "tibiaTab3" && event.target.checked) {
      this.isTab3TibiaChecked = false;
      this.isTab3FemurChecked = true;
      this.tab3FirstImage = 'tab3-img2.png';
      this.firstCheck = false;
    }
    else{
      this.isTab3TibiaChecked = true;
      this.isTab3FemurChecked = true;
      this.firstCheck = false;
    }
  }

  onCaptureTab3() {
    if ((!this.isTab3FemurChecked || this.firstCheck) && !this.femurTab3) {
      this.femurTab3 = true;
    }
    if (!this.isTab3TibiaChecked && !this.tibiaTab3) {
      this.tibiaTab3 = true;
    }

    if (this.femurTab3 && this.tibiaTab3) {
      this.tab3SuccessMsg = true;
    }
    else {
      this.tab3SuccessMsg = false;
    }
  }
  onClearAllTab3() {
    this.tibiaTab3 = false;
    this.femurTab3 = false;

    this.isTab3TibiaChecked = true;
    this.isTab3FemurChecked = true;

    this.tab3FirstImage = 'tab3-img1.png';
    this.firstCheck = true;

    if (this.femurTab3 && this.tibiaTab3) {
      this.tab3SuccessMsg = true;
    }
    else {
      this.tab3SuccessMsg = false;
    }
  }

  step1GotIt() {
    this.firstCheck = true;
    this.isStep1GotIt = false;
  }
  step2GotIt() {
    this.firstCheck = true;
    this.isStep2GotIt = false;
  }
  step3GotIt() {
    this.firstCheck = true;
    this.isStep3GotIt = false;

  }

  onNext() {
    this.router.navigate(["/header/implant-details/joint-assesment"])
  }
  onPrev() {
    this.router.navigate(["/header/implant-details/system-setup"])
  }

}
