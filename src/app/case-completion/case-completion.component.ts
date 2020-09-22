import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-case-completion',
  templateUrl: './case-completion.component.html',
  styleUrls: ['./case-completion.component.css']
})
export class CaseCompletionComponent implements OnInit {
  @Output() nextRoute: EventEmitter<boolean> = new EventEmitter<boolean>();

  implantPlanId: any;
  patientId: any;
  patientName: any;

  displaySaveCloudDialog: boolean;
  displaySaveUSBDialog: boolean;


  constructor() { }

  ngOnInit() {

    this.implantPlanId = localStorage.getItem('selectedImplantPlanId');
    this.patientId = localStorage.getItem('selectedPatientId');
    this.patientName = localStorage.getItem('selectedPatientName');
  }

  showSaveCloudDialog() {
    this.displaySaveCloudDialog = true;
  }
  onSaveCloudDialogClose() {
    this.displaySaveCloudDialog = false;

  }

  showSaveUSBDialog() {
    this.displaySaveUSBDialog = true;
  }
  onSaveUSBDialogClose() {
    this.displaySaveUSBDialog = false;

  }

  onNextRoute(){
    this.nextRoute.emit();
  }

 

}
