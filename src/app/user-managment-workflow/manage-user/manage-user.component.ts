import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user-dto';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  ImplantPlanIds: any[];
  cols: any[];

  isAddNewUser: boolean = false;
  isEditUser: boolean = false;

  userList: any = [];
  user: User;
  selectedUsers: User[];

  constructor(private userManagementService: UserManagementService,
    private router: Router, private route: ActivatedRoute) {
      
     }

  ngOnInit() {        
    this.userManagementService.getUsers().subscribe(data => this.userList = data.data);
    // this.userManagementService.currentPendingTaskCount.subscribe(count => this.addedUserDetails = count)
    // if(this.addedUserDetails.length > 0 || this.addedUserDetails != undefined){     
      // const obj: any = {
      //   id: this.userList.length + 1,
      //   userName: this.route.snapshot.queryParamMap.get('userName'),
      //   firstName: this.route.snapshot.queryParamMap.get('firstName'),
      //   lastName: this.route.snapshot.queryParamMap.get('lastName'),
      //   email: this.route.snapshot.queryParamMap.get('email'),
      // }
      // this.userList.push(obj);
    

    
    
    this.cols = [
      { field: 'userName', header: 'User Name' },
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'email', header: 'Email' },
      { field: 'role', header: 'Role' },
    ];
  }

  ngOnChanges(){   

  }

  deleteSelectedUsers() {
    this.userList = this.userList.filter(val => !this.selectedUsers.includes(val));
    this.selectedUsers = null;
  }
  editSelectedUsers() {
    // this.userList = this.userList.filter(val => this.selectedUsers.includes(val));
    this.isEditUser = true;
  }

  resetPassword(user) {
    this.router.navigate(["/header/user-management/reset-password"], { queryParams: { userName: user.userName } })
  }

  addedUserDetails: any;

  addNewUser() {
    this.userManagementService.currentPendingTaskCount.subscribe(count => this.addedUserDetails = count)
    const obj: User = {
      id: this.userList.length + 1,
      userName: this.addedUserDetails.userName,
      firstName: this.addedUserDetails.firstName,
      lastName: this.addedUserDetails.lastName,
      email: this.addedUserDetails.email,
      role: this.addedUserDetails.role,
    }
    this.userList.push(obj);
  }

  onEditCancel() {
    this.isEditUser = false;
  }

  onEditUser(data: any) {
    let itemIndex = this.userList.findIndex(item => item.id == data.id);
    this.userList[itemIndex] = data;
    this.selectedUsers = null;
    this.isEditUser = false;
  }

}
