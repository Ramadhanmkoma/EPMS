import { Component, Input, Output } from "@angular/core";
// import { EventEmitter } from "stream";

@Component({
  // selector: "epm-login",
  templateUrl: '../login/login.component.html',
  styleUrls: ['../login/login.component.css']
})

export class LoginApp {
  // @Input() event: any;
  // @Output() eventClick = new EventEmitter()

  // handleEventClick() {
  //   this.eventClick.emit('foo');
  // }

  constructor() {}

  title:string = 'epms';
  subTitle:string = 'performance evaluation';

  usersForm = {
    username: '',
    password: '',
    formUrl: 'www.google.com',
    submit: 'submit'
  }
  // userId = document.getElementById('userId');
  // passId = document.getElementById('passId');
  // _submitBtn = document.getElementById('btn-submit');
  showButton: boolean = false;
  showButton1: boolean = false;
  // isDisabled():void {

  // }

  //Methods Implementations
  // toggleButton(): void {
  //   this.showButton = !;
  // }

  toggleButton(): void {
    if (this.showButton == false && this.showButton1 == false) {
      this.showButton = !this.showButton;
      this.showButton1 = !this.showButton1;
    }

  }

}

/***
 * let userId = document.getElementById('userId'),
    passId = document.getElementById('passId'),
    _submitBtn = document.getElementById('btn-submit');

    if (userId?.textContent == "" || passId?.textContent == "") {
      _submitBtn?.setAttribute("[disabled]", "isDisabled");
    }
  *
***/

