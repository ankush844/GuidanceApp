import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css']
})
export class StartupComponent implements OnInit {
  battery: boolean;
  operatingSystem: boolean;
  guidanceApp: boolean;
  database: boolean;
  cloudConnectivity: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    
    setTimeout(() => {
      this.battery = true; 
    }, 2000);
    setTimeout(() => {
      this.operatingSystem = true;  
    }, 4000);
    setTimeout(() => {
      this.guidanceApp = true;  
    }, 7000);
    setTimeout(() => {
      this.database = true;  
    }, 9000);
    setTimeout(() => {
      this.cloudConnectivity = true;  
    }, 11000);
    setTimeout(() => {
      this.router.navigate(["/login"])     
    }, 15000);
  }

}
