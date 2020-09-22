import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onAdd: EventEmitter<any> = new EventEmitter<any>();

  @Input() selectedUser: any;

  editForm: FormGroup;
  editUser: any;
  editUserIndex: any;

  userList: any;


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private userManagementService: UserManagementService) {
    this.editForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      userName: [''],
      password: [''],
      confirmPassword: [''],
      monogramCertified: [''],
      role: [false],
    });
  }

  ngOnInit() {
    this.userManagementService.getUsers().subscribe(data => this.userList = data.data);

    this.editUser = this.selectedUser[0];
    console.log(this.editUser)
    this.editForm.get('firstName').setValue(this.editUser.firstName);
    this.editForm.get('lastName').setValue(this.editUser.lastName);
    this.editForm.get('email').setValue(this.editUser.email);
    this.editForm.get('monogramCertified').setValue(this.editUser.monogramCertified);
  }
  ngOnChanges() {
    // this.editForm.get('firstName').setValue(this.editUser.firstName);
    // this.editForm.get('lastName').setValue(this.editUser.lastName);
    // this.editForm.get('email').setValue(this.editUser.email);
    // this.editForm.get('monogramCertified').setValue(this.editUser.monogramCertified);
  }

  get firstName() { return this.editForm.get('firstName'); }
  get lastName() { return this.editForm.get('lastName'); }
  get email() { return this.editForm.get('email'); }
  get monogramCertified() { return this.editForm.get('monogramCertified'); }

  onCancel() {
    this.onClose.emit();
    // this.router.navigate(["/header/user-home"])
  }

  onEditUser() {
    this.editUser = {
      id: this.editUser.id,
      userName: this.editUser.userName,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      monogramCertified: this.monogramCertified.value,
      role: this.editUser.role
    }
    // this.userManagementService.updatePendingTaskCount(this.editUser);
    this.onAdd.emit(this.editUser);
    this.router.navigate(["/header/user-management/manage-users"])
    // this.router.navigate(["/header/user-home"])
  }

}
