import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-system-popups',
  templateUrl: './system-popups.component.html',
  styleUrls: ['./system-popups.component.css']
})
export class SystemPopupsComponent implements OnInit {
  @Input() display: boolean = false;
  @Input() selectedPopup: any;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  systemPopupHeading: any;
  selectedValues: any;

  selectedHeader: any;
  selectedText: any;
  selectedImage: any;
  styleClasses: any;

  mountEndEffectorBtn: boolean = false;
  selectedSerialNo: any;

  popupsArray: any;

  constructor() {
    this.popupsArray = [
      {
        "header": "Probe Tip",
        "text": "Insert the probe tip into the cone in the Universal Tracker<br> and orient markers toward camera.",
        "image": "Probe-Tip-Check.png",
        "styleClass": "verifyProbe",
        "btnText": "Confirm"
      },
      {
        "header": "Position Robot Cart",
        "text": "Position robot cart next to patient table and align center of cart with patient's pelvis.",
        "image": "Position-Robot-Cart.png",
        "styleClass": "positionRobot"
      },
      {
        "header": "Connect Robot Cart",
        "text": "Plug cart cord into robot cart.",
        "image": "robot_cart.png",
        "styleClass": "connectRobot"
      },
      {
        "header": "Drape Robotic Arm",
        "text": "Press the 'Drape Arm' button and install drape around robotic arm<br> and cart after arm moves into draping position.<br> Press the 'Park Arm' button after the drape is installed.",
        "image": "drape.png",
        "styleClass": "dropeRobotic"
      },
      {
        "header": "Mount End Effector",
        "text": "Press locking button on end effector mount and<br> install end effector onto the end of the robotic arm.",
        "image": "mount_end_effector.png",
        "styleClass": "endEffectot"
      },
      {
        "header": "Mount Irrigation",
        "text": "Connect the irrigation tubing from the pump<br> on the back of the robot cart to the inlet on the end effector.",
        "image": "irrigation.png",
        "styleClass": "mountIrrigation"
      },
      {
        "header": "Install Bone Trackers",
        "text": "",
        "image": "robot-cart.png",
        "styleClass": "boneTracker"
      },
      {
        "header": "Verify Camera View",
        "text": "Press the 'Camera View' button and use this viewing tool <br> to ensure the bone trackers are approximately<br> in the center of the camera working volume.",
        "image": "camera.png",
        "styleClass": "cameraView"
      },
      {
        "header": "Probe Connectivity",
        "text": "Confirm probe is connected. <br> If not connected, click and release both buttons.",
        "image": "probe.png",
        "styleClass": "connectProbe"
      }
    ]
  }

  ngOnInit() {


  }

  ngOnChanges() {
    this.selectedHeader = this.popupsArray[Number(this.selectedPopup)].header;
    this.selectedText = this.popupsArray[Number(this.selectedPopup)].text;
    this.selectedImage = this.popupsArray[Number(this.selectedPopup)].image;
    this.styleClasses = this.popupsArray[Number(this.selectedPopup)].styleClass;
  }

  onSerialNoChange(event) {
    console.log(event.value)
    if (event.target.value != "null") {
      this.mountEndEffectorBtn = true;
    }
    else {
      this.mountEndEffectorBtn = false;
    }
  }
  onHide() {
    this.display = false;
    this.onClose.emit(this.display);
  }
probeTipAccuracy: any = 1;
  onHide1() {
    if(this.probeTipAccuracy == 2){
      this.display = false;
      this.onClose.emit(this.display);
    }
    if( this.probeTipAccuracy < 2){
      this.probeTipAccuracy = this.probeTipAccuracy + 1;
    }
    else{
      this.probeTipAccuracy = 1;
    }
       
  }


}
