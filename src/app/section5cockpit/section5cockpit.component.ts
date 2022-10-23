import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-section5cockpit',
  templateUrl: './section5cockpit.component.html',
  styleUrls: ['./section5cockpit.component.scss']
})
export class SECTION5cockpitComponent implements OnInit {
  //serverElements = [];
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = "";
  newServerContent = "";

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }
}

