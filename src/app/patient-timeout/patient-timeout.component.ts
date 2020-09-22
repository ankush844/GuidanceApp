import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-timeout',
  templateUrl: './patient-timeout.component.html',
  styleUrls: ['./patient-timeout.component.css']
})
export class PatientTimeoutComponent implements OnInit {
  @Input() display: boolean = false;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  implantPlanId: any;
  patientId: any;
  patientName: any;
  acknowledge: boolean = true;
  constructor(private router: Router) { }

  ngOnInit() {
    this.implantPlanId = localStorage.getItem('selectedImplantPlanId');
    this.patientId = localStorage.getItem('selectedPatientId');
    this.patientName = localStorage.getItem('selectedPatientName');
  }
  onHide() {
    this.display = false;
    this.onClose.emit(this.display);
  }
  onAgree(){
    this.display = false;
    this.onClose.emit(this.display);
    this.router.navigate(["/header/implant-details/bone-registration"])
  }
  onDisAgree(){
    this.display = false;
    this.onClose.emit(this.display);
    this.router.navigate(["/header/home"])
  }
  FieldsChange(values:any){
    if(values.currentTarget.checked){
      this.acknowledge = false;
    }
    else
    {
      this.acknowledge = true;
    }
    }

}
