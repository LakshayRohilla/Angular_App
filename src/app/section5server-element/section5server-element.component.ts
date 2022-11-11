import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-section5server-element',
  templateUrl: './section5server-element.component.html',
  styleUrls: ['./section5server-element.component.scss']
})
export class Section5serverElementComponent implements
  OnInit,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy
{

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
  ngDoCheck() {
    console.log("ngDoCheck called!")
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit called!")
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!")
  }
  ngAfterViewInit() {
    console.log("ngAfterContentInit called!")
  }
  ngAfterViewChecked() {
    console.log("ngAfterContentChecked called!")
  }
  ngOnDestroy() {
    console.log("ngOnDestroy called!")
  }
}


