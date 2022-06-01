import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'epm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EPMS - Employee Performance Evaluation';

  ngOnInit():void {
    console.log("In OnInit")
  }
}
