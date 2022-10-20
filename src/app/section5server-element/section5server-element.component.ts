import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section5server-element',
  templateUrl: './section5server-element.component.html',
  styleUrls: ['./section5server-element.component.scss']
})
export class Section5serverElementComponent implements OnInit {

  @Input() element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}