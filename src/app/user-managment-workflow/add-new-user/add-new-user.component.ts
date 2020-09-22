import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onAdd: EventEmitter<any> = new EventEmitter<any>();

  addUserForm: FormGroup;

  newUser: any;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private userManagementService: UserManagementService) {

    this.addUserForm = this.formBuilder.group({
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
  }

  ngOnChanges() {
    this.newUser = {
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
      monogramCertified: "",
      role: false,
    }

    this.addUserForm.get('firstName').setValue(this.newUser.firstName);
    this.addUserForm.get('lastName').setValue(this.newUser.lastName);
    this.addUserForm.get('email').setValue(this.newUser.email);
    this.addUserForm.get('userName').setValue(this.newUser.userName);
    this.addUserForm.get('password').setValue(this.newUser.password);
    this.addUserForm.get('confirmPassword').setValue(this.newUser.confirmPassword);
    this.addUserForm.get('monogramCertified').setValue(this.newUser.monogramCertified);
    this.addUserForm.get('role').setValue(this.newUser.role);
  }

  get firstName() { return this.addUserForm.get('firstName'); }
  get lastName() { return this.addUserForm.get('lastName'); }
  get email() { return this.addUserForm.get('email'); }
  get userName() { return this.addUserForm.get('userName'); }
  get password() { return this.addUserForm.get('password'); }
  get confirmPassword() { return this.addUserForm.get('confirmPassword'); }
  get monogramCertified() { return this.addUserForm.get('monogramCertified'); }
  get role() { return this.addUserForm.get('role'); }

  onCancel() {
    // this.onClose.emit();
    this.router.navigate(["/header/user-home"])
  }

  onAddUser() {
    this.newUser = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      userName: this.userName.value,
      monogramCertified: this.monogramCertified.value,
      role: this.role.value
    }
    this.userManagementService.updatePendingTaskCount(this.newUser);


    // this.onAdd.emit();

   
    this.router.navigate(["/header/user-management/manage-users"])
    // this.router.navigate(["/header/user-home"])
  }


}
