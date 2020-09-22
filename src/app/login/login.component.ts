import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any[];
  loginForm: FormGroup;
  incorrectPassword:boolean;

  constructor(private fb: FormBuilder,
    private router: Router) {
    this.loadForm();
  }

  ngOnInit() {
    
    this.users = [
      {
        "value": "user1",
        "label": "Richard",
        "password": "111"
      },
      {
        "value": "user2",
        "label": "Sherif",
        "password": "222"
      },
      {
        "value": "adminUser",
        "label": "AdminUser",
        "password": "123"
      }
    ]
    
  }

  ngOnChanges() {

  }

  loadForm() {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  get userName() { return this.loginForm.get('userName'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit(){
    if(this.userName.invalid || this.password.invalid){
      this.loginForm.markAllAsTouched();
    }
    else{
      for(let i=0;i<=this.users.length;i++){
        if(this.userName.value == this.users[i].value){ 
          if(this.password.value != this.users[i].password){          
            this.loginForm.setErrors({ 'incorrectCredentials': true });
            return false;
          }
          else{
            this.loginForm.setErrors(null);
            localStorage.setItem('loginUser', this.users[i].label);

            if(this.users[i].value == "adminUser"){
              this.router.navigate(["/header/user-home"])  
            }
            else{
              this.router.navigate(["/header/home"])  
            }
           
          }
        }
       
      }
      
    }
    
  }

  onShutdown(){
    window.close();
  }
}
