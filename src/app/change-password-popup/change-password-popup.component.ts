import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password-popup',
  templateUrl: './change-password-popup.component.html',
  styleUrls: ['./change-password-popup.component.css']
})
export class ChangePasswordPopupComponent implements OnInit {
  @Input() display: boolean = false;
  @Input() changePassword : boolean;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onHide() {
    this.display = false;
    this.onClose.emit(this.display);
    // if(this.changePassword){
    //   this.router.navigate(["/header/home"]) 
    // }
    // else{
    //   this.router.navigate(["/header/user-home"]) 
    // }
     
  }

}
