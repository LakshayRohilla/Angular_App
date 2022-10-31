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
  // newServerName = ""; as we are not using it not.
  newServerContent = "";

  constructor() { }

  ngOnInit(): void {
  }

    onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent
    })
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent
    })
  }
}

