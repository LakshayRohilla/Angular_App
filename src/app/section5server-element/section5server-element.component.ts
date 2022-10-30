import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-section5server-element',
  templateUrl: './section5server-element.component.html',
  styleUrls: ['./section5server-element.component.scss']
})
export class Section5serverElementComponent implements OnInit, OnChanges {

  @Input("srvElement") element: {type: string, name: string, content: string} = {type:  "", name: "", content: "" };
  @Input() name: string = "";
  constructor() {
    console.log("Constructor called")
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChange called');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log("ngOnInit called")
  }

}

