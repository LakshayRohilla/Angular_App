import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section5cockpit',
  templateUrl: './section5cockpit.component.html',
  styleUrls: ['./section5cockpit.component.scss']
})
export class SECTION5cockpitComponent implements OnInit {
  //serverElements = [];
  newServerName = "";
  newServerContent = "";

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    //   });
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: "blueprint",
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

}
