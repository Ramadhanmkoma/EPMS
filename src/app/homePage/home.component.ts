import { Component, Input } from '@angular/core';

@Component({
  // selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomePage {
  constructor() {}

  contents: any[] = [
    {
    imageUrl: '../assets/',
    imageName: 'Evaluation chart'
    },
    {
      imageUrl: '../assets/',
      imageName: 'Employees'
    },
    {
      imageUrl: '../assets/',
      imageName: 'Result Computation'
    }
];
}
