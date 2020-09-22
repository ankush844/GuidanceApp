import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-preferences',
  templateUrl: './user-preferences.component.html',
  styleUrls: ['./user-preferences.component.css']
})
export class UserPreferencesComponent implements OnInit {

  slider1Value: any = 50;
  slider2Value: any = 30;
  slider3Value: any = 70;

  isImplantPlanning: boolean;
  isLigamentBalancing: boolean;

  autoAdvance: boolean = true;
  resectionDepth: boolean = true;
  accuracyNo: boolean = true;

  femur: boolean = true;
  tibia: boolean;

  axisAngle: boolean = true;
  romAxis: boolean = true;


  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCancel() {
    this.router.navigate(["/header/home"])
  }

  onSave() {
    this.router.navigate(["/header/home"])
  }

  onImplantPlanning() {
    this.isImplantPlanning = true;
    this.isLigamentBalancing = false
  }

  onLigamentBalancing() {
    this.isImplantPlanning = false
    this.isLigamentBalancing = true;
  }

  onReset() {
    this.slider1Value = 50;
    this.slider2Value = 30;
    this.slider3Value = 70;

    this.autoAdvance = true;
    this.resectionDepth = true;
    this.accuracyNo = false;

    this.femur = true;
    this.tibia = false;

    this.axisAngle = true;
    this.romAxis = true;
  }

}
