import { Component } from "@angular/core";

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavBar {

  navMenu = {
    home: 'Home',
    services: 'Services',
    about: 'About-us',
    comments: 'Leave a Message',
    tips: 'Help'
  }

  links = {
    homeUrl: '../homePage/home.component.html',
    serviceUrl: '',
    aboutUrl: '',
    commentUrl: ''
  }

}
