import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-implant-plan-usb',
  templateUrl: './implant-plan-usb.component.html',
  styleUrls: ['./implant-plan-usb.component.css']
})
export class ImplantPlanUsbComponent implements OnInit {

  @Input() display: boolean = false;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  ImplantPlanIds: any[];
  cols: any[];

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.cols = [
      { field: 'implantPlanId', header: 'Implant Plan Id' },
      { field: 'patientId', header: 'Patient Id' }
    ];

    this.ImplantPlanIds= [
      {
        implantPlanId: "132432",
        patientId: "434231",
        patientName: "Robert Cameron"
      }
    ]
  }

  onHide() {
    this.display = false;
    this.onClose.emit(this.display);
  }

  loadImplantPlan(selectedPlan){
    localStorage.setItem('selectedImplantPlanId', selectedPlan.implantPlanId);
    localStorage.setItem('selectedPatientId', selectedPlan.patientId);
    localStorage.setItem('selectedPatientName', selectedPlan.patientName);
    this.router.navigate(["/header/implant-details/pre-op-planning"]);
  }

}
