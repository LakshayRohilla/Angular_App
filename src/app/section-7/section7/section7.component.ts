import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section7',
  templateUrl: './section7.component.html',
  styleUrls: ['./section7.component.scss']
})
export class Section7Component implements OnInit {
  // numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5]
  evenNumbers = [2, 4]
  onlyOdd = false;
  value: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
