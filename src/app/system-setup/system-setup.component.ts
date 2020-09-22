import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-system-setup',
  templateUrl: './system-setup.component.html',
  styleUrls: ['./system-setup.component.css']
})
export class SystemSetupComponent implements OnInit {
  displayErrorDialog: boolean;
  displayPatientDialog: boolean;
  displayPopupDialog: boolean;
  selectedBlock: any;

  verifyProbe: boolean = false;
  positionRobot: boolean = false;
  connectRobot: boolean = false;
  dropeRobotic: boolean = false;
  endEffectot: boolean = false;
  mountIrrigation: boolean = false;
  boneTracker: boolean = false;
  cameraView: boolean = false;
  connectProbe: boolean = false;
  errorStatus: boolean;

  firstTimeOpen: boolean;

  constructor(private router: Router) { }


  ngOnInit() {
  }
  showPopupDialog() {
    this.displayPopupDialog = true;
  }
  onPopupDialogClose() {
    this.displayPopupDialog = false;
    if (this.selectedBlock == "0") {
      this.verifyProbe = true;
    }
    else if (this.selectedBlock == "1") {
      this.positionRobot = true;
    }
    else if (this.selectedBlock == "2") {
      this.connectRobot = true;
    }
    else if (this.selectedBlock == "3") {
      this.dropeRobotic = true;
    }
    else if (this.selectedBlock == "4") {
      this.endEffectot = true;
    }
    else if (this.selectedBlock == "5") {
      this.mountIrrigation = true;
    }
    else if (this.selectedBlock == "6") {
      this.boneTracker = true;
    }
    else if (this.selectedBlock == "7") {
      this.cameraView = true;
    }
    else if (this.selectedBlock == "8") {
      this.connectProbe = true;
      if(this.firstTimeOpen != true){
        this.errorStatus = true;
      }
      else{
        this.errorStatus = false;
      }
    }
  }
  showErrorDialog() {
    this.displayErrorDialog = true;
  }
  onErrorDialogClose() {
    this.displayErrorDialog = false;
    if(this.firstTimeOpen == true){
      this.errorStatus = true;
    }
    else{
      this.errorStatus = false;
    }

  }
  showPatientDialog() {
    this.displayPatientDialog = true;
  }
  onPatientDialogClose() {
    this.displayPatientDialog = false;
  }
  onNext() {
    // this.router.navigate(["/implant-details/bone-registration"])
    // if(this.verifyProbe || this.connectRobot || this.dropeRobotic || this.endEffectot || this.mountIrrigation || this.cameraView){
      
    // }
    this.displayPatientDialog = true;
  }
  onPrev() {
    this.router.navigate(["/header/implant-details/pre-op-planning"])
  }
firstTimeError: number = 1;
  checkEvent(id) {
    if (this.connectProbe == true && id == 8) {
      if ((!this.errorStatus && this.connectProbe )|| this.firstTimeError == 0) {
        this.selectedBlock = id;
        this.displayPopupDialog = true;  
       
      }
      else {
        this.displayErrorDialog = true;
        this.firstTimeError = this.firstTimeError + 1;
      }
    }
    else {
      this.selectedBlock = id;
      this.displayPopupDialog = true;
    }
  }

}
