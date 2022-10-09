import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.scss']
})
export class Server2Component implements OnInit {
  allowNewServer = false;
  // Implementing event data binding
  serverCreationStatus: string = "Server is not created"
  // Implementing two way binding
  enterServer = "Default name"

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    },2000);
  }
  //Implementing interpolation data binding
  serverID: number = 10
  serverStatus: string = "Offline"

  getserverStatus(){
    return this.serverStatus = "Online"
  }

  ngOnInit(): void {
  }

  //Implementing event Databinding
  onServerCreating() {
    this.serverCreationStatus = "Server is created"
  }

}
