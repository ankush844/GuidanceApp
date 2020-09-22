import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  isAddNewUser: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addNewUser(){
    // this.isAddNewUser = true;
    this.router.navigate(["/header/user-management/add-new-user"])
  }
  manageUsers(){
    this.router.navigate(["/header/user-management/manage-users"])
  }

  closeNewUser(){
    this.isAddNewUser = false;
  }

}
