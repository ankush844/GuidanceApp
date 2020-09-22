import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayCloudDialog:boolean;
  displayUSBDialog:boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showCloudDialog() {
    this.displayCloudDialog = true;
  }
  onCloudDialogClose() {
    this.displayCloudDialog = false;
  }

  showUSBDialog() {
    this.displayUSBDialog = true;
  }
  onUSBDialogClose() {
    this.displayUSBDialog = false;
  }

  showUserPreference(){
    this.router.navigate(["/header/user-preferences"])
  }

}
