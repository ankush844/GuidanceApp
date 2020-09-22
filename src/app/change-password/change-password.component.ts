import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jQuery';
import { MustMatch } from '../match.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  isNewPasswordEye:boolean;
  isConfirmPasswordEye: boolean;
  displayChangePasswordDialog: boolean;
  isChangePassword:boolean = true;

  changePasswordForm: FormGroup;
  errorMsg: string = '';
  changePasswordObj = {
    newPassword: '',
    confirmPassword: ''
  };

  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {

    this.loadForm();
  }

  loadForm() {
    this.changePasswordForm = this.formBuilder.group({
      newPassword: [this.changePasswordObj.newPassword, [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')]],
      confirmPassword: [this.changePasswordObj.confirmPassword,{validators:[Validators.required]}]
    }, {
      validators: [MustMatch('newPassword', 'confirmPassword')]
    })
  }

  get nPassword() { return this.changePasswordForm.get('newPassword'); }
  get cPassword() { return this.changePasswordForm.get('confirmPassword'); }

  onChangePassword(){
    if(this.changePasswordForm.invalid){
      this.changePasswordForm.markAllAsTouched();
    }
    else{
      this.displayChangePasswordDialog = true;
    }
    
  }


  onCancel(){
    this.router.navigate(["/header/home"])  
  }
  toggleNewPassword(){
   if(this.isNewPasswordEye == true){
    this.isNewPasswordEye = false;
   }
   else{
    this.isNewPasswordEye = true;
   }
  }

  toggleConfirmPassword(){
    if(this.isConfirmPasswordEye == true){
     this.isConfirmPasswordEye = false;
    }
    else{
     this.isConfirmPasswordEye = true;
    }
   }

   showChangePasswordDialog() {
    this.displayChangePasswordDialog = true;
  }
  onChangePasswordDialogClose() {
    this.displayChangePasswordDialog = false;

  }

}
