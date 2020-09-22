import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MustMatch } from 'src/app/match.validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  displayChangePasswordDialog: boolean;
  isChangePassword: boolean = false
  userName: any;

  changePasswordForm: FormGroup;
  errorMsg: string = '';
  changePasswordObj = {
    newPassword: '',
    confirmPassword: ''
  };

  constructor(private router: Router, 
              private formBuilder: FormBuilder, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.userName = this.route.snapshot.queryParamMap.get('userName');
    this.loadForm();
  }
  onCancel() {
    this.router.navigate(["/header/user-management/manage-users"])
  }



  loadForm() {
    this.changePasswordForm = this.formBuilder.group({
      newPassword: [this.changePasswordObj.newPassword, [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')]],
      confirmPassword: [this.changePasswordObj.confirmPassword, { validators: [Validators.required] }]
    }, {
      validators: [MustMatch('newPassword', 'confirmPassword')]
    })
  }

  get nPassword() { return this.changePasswordForm.get('newPassword'); }
  get cPassword() { return this.changePasswordForm.get('confirmPassword'); }

  onChangePassword() {
    if (this.changePasswordForm.invalid) {
      this.changePasswordForm.markAllAsTouched();
    }
    else {
      this.displayChangePasswordDialog = true;
    }

  }


  showChangePasswordDialog() {
    this.displayChangePasswordDialog = true;
  }
  onChangePasswordDialogClose() {
    this.displayChangePasswordDialog = false;

  }

}
