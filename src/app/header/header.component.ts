import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navigateToHome: boolean;
  logggedUser: any;

  isUserOptionPanel: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.logggedUser = localStorage.getItem('loginUser');
    // if(this.router.url == "/home"){
    // this.navigateToHome=true;
    // }
    // else{
    //   this.navigateToHome=false;
    // }
  }

  userOptions(){
    if(this.isUserOptionPanel==true){
      this.isUserOptionPanel=false;
    }
    else{
      this.isUserOptionPanel=true
    }
  }

  onLogOff(){
    this.isUserOptionPanel=false;
    this.router.navigate(["/login"]);
  }
  onShutDown(){
    this.isUserOptionPanel=false;
    window.close();
  }

  onChangePassword(){
    this.isUserOptionPanel=false;
    this.router.navigate(["/header/change-password"]);
  }

}
