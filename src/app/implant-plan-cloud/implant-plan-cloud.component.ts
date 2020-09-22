import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-implant-plan-cloud',
  templateUrl: './implant-plan-cloud.component.html',
  styleUrls: ['./implant-plan-cloud.component.css']
})
export class ImplantPlanCloudComponent implements OnInit {
  @Input() display: boolean = false;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  ImplantPlanIds: any[];
  cols: any[];

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.cols = [
      { field: 'implantPlanId', header: 'Implant Plan ID' },
      { field: 'patientId', header: 'Patient ID' }
    ];

    this.ImplantPlanIds= [
      {
        implantPlanId: "234132",
        patientId: "321234",
        patientName: "Jack Cameron"
      },
      {
        implantPlanId: "356234",
        patientId: "568764",
        patientName: "James Garcia"
      },
      {
        implantPlanId: "456724",
        patientId: "654432",
        patientName: "Robert Smith"
      },
    ]
  }

  loadImplantPlan(selectedPlan){
    localStorage.setItem('selectedImplantPlanId', selectedPlan.implantPlanId);
    localStorage.setItem('selectedPatientId', selectedPlan.patientId);
    localStorage.setItem('selectedPatientName', selectedPlan.patientName);
    this.router.navigate(["/header/implant-details/pre-op-planning"]);
  }  

  onHide() {
    this.display = false;
    this.onClose.emit(this.display);
  }

}
