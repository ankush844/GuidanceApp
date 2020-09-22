import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-breadcrumb-nav',
  templateUrl: './breadcrumb-nav.component.html',
  styleUrls: ['./breadcrumb-nav.component.css']
})
export class BreadcrumbNavComponent implements OnInit {
  home: boolean;
  preOpPlanning: boolean = true;
  systemSetup: boolean;
  boneRegistration: boolean;
  jointAssesment: boolean;
  intraOpPlanning: boolean;
  bonePreparation: boolean;
  caseCompletion: boolean;

  isPreOpPlanning: boolean;
  isSystemSetup: boolean;
  isBoneRegistration: boolean;
  isJointAssesment: boolean;
  isIntraOpPlanning: boolean;
  isBonePreparation: boolean;
  isCaseCompletion: boolean;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          console.log( this.router.url);
          if (this.router.url == "/header/home") {
            this.home = true;
          }         
          else if (this.router.url == "/header/implant-details/pre-op-planning") {
            this.preOpPlanning = true;
            this.isPreOpPlanning = true;
          }
          else if (this.router.url == "/header/implant-details/system-setup") {
            this.systemSetup = true;
            this.isSystemSetup = true;
          }
          else if (this.router.url == "/header/implant-details/bone-registration") {
            this.boneRegistration = true;
            this.isBoneRegistration = true;

            this.preOpPlanning = false;
            this.systemSetup = false;
            
            this.jointAssesment = false;
            this.intraOpPlanning = false;
            this.bonePreparation = false;
            this.caseCompletion = false;

          }
          else if (this.router.url == "/header/implant-details/joint-assesment") {
            this.jointAssesment = true;
            this.isJointAssesment = true;

            if(this.isIntraOpPlanning == true){
              this.intraOpPlanning = true;
            }else{
              this.intraOpPlanning = false;
            }
            this.boneRegistration = true;
            this.preOpPlanning = true;
            this.systemSetup = true;
          }
          else if (this.router.url == "/header/implant-details/intra-op-planning") {
            this.intraOpPlanning = true;
            this.isIntraOpPlanning = true
          }
          else if (this.router.url == "/header/implant-details/bone-preparation") {
            this.bonePreparation = true;
            this.isBonePreparation = true

            if(this.isCaseCompletion == true){
              this.caseCompletion = false;
            }            
            this.preOpPlanning = false;
            this.systemSetup = false;
            this.boneRegistration = false;           
            this.intraOpPlanning = false;
          }
          else if (this.router.url == "/header/implant-details/case-completion") {
            this.caseCompletion = true;
            this.isCaseCompletion = true;

            this.preOpPlanning = true;
            this.systemSetup = true;
            this.boneRegistration = true;           
            this.intraOpPlanning = true;
            this.bonePreparation = true;

            
          }
        }
      }
    );
  }

}
