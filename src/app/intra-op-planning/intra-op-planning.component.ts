import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intra-op-planning',
  templateUrl: './intra-op-planning.component.html',
  styleUrls: ['./intra-op-planning.component.css']
})
export class IntraOpPlanningComponent implements OnInit {

  
  @Output() onPreviousRoute: EventEmitter<boolean> = new EventEmitter<boolean>();
  showHideButtons: boolean = false;
  isTabOne: boolean = true;
  isTabTwo: boolean ;

  implantPlanId: any;
  patientId: any;
  patientName: any;

  femurSize: number=1;
  tibiaSize: number=1;
  thickness:number = 6;

  tab2FemurSize:number=1;
  tab2TibiaSize:number=1;
  tab2Thickness:number=6;

  constructor(private router: Router) { }

  ngOnInit() {
    this.implantPlanId = localStorage.getItem('selectedImplantPlanId');
    this.patientId = localStorage.getItem('selectedPatientId');
    this.patientName = localStorage.getItem('selectedPatientName');
  }
  overShowHideButtons() {
    this.showHideButtons = true;
  }
  outShowHideButtons() {
    this.showHideButtons = false;
  }
  selectTab1() {
    this.isTabOne = true;
    this.isTabTwo = false;
  }
  selectTab2() {
    this.isTabOne = false
    this.isTabTwo = true;
  }
  decFemurSize(){
    if(this.femurSize==1){
      this.femurSize
    }
    else{
      this.femurSize = this.femurSize - 1;
    }
  }
  incFemurSize(){
    if(this.femurSize==6){
      this.femurSize
    }
    else{
      this.femurSize = this.femurSize + 1;
    }
  }

  decTibiaSize(){
    if(this.tibiaSize==1){
      this.tibiaSize
    }
    else{
      this.tibiaSize = this.tibiaSize - 1;
    }
  }
  incTibiaSize(){
    if(this.tibiaSize==6){
      this.tibiaSize
    }
    else{
      this.tibiaSize = this.tibiaSize + 1;
    }
  }

  decThickness(){
    if(this.thickness==6){
      this.thickness
    }
    else{
      this.thickness = this.thickness - 2;
    }
    
  }
  incThickness(){
    if(this.thickness==14){
      this.thickness
    }
    else{
      this.thickness = this.thickness + 2;
    }
  }

  decTab2FemurSize(){
    if(this.tab2FemurSize==1){
      this.tab2FemurSize
    }
    else{
      this.tab2FemurSize = this.tab2FemurSize - 1;
    }
  }
  incTab2FemurSize(){
    if(this.tab2FemurSize==6){
      this.tab2FemurSize
    }
    else{
      this.tab2FemurSize = this.tab2FemurSize + 1;
    }
  }

  decTab2TibiaSize(){
    if(this.tab2TibiaSize==1){
      this.tab2TibiaSize
    }
    else{
      this.tab2TibiaSize = this.tab2TibiaSize - 1;
    }
  }
  incTab2TibiaSize(){
    if(this.tab2TibiaSize==6){
      this.tab2TibiaSize
    }
    else{
      this.tab2TibiaSize = this.tab2TibiaSize + 1;
    }
  }

  decTab2Thickness(){
    if(this.tab2Thickness==6){
      this.tab2Thickness
    }
    else{
      this.tab2Thickness = this.tab2Thickness - 2;
    }
    
  }
  incTab2Thickness(){
    if(this.tab2Thickness==14){
      this.tab2Thickness
    }
    else{
      this.tab2Thickness = this.tab2Thickness + 2;
    }
  }

  onNext(){
    this.router.navigate(["/header/implant-details/bone-preparation"])
  }
  onPrev(){
    // this.router.navigate(["/header/implant-details/joint-assesment"])
    this.onPreviousRoute.emit();
  }

}
