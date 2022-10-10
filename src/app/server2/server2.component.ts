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
    //ngStyle implementation
    this.serverStatus = Math.random() > 0.5 ? 'Offline' : 'Online';
  }
  //Implementing interpolation data binding
  serverID: number = 10
  serverStatus: string = "Offline"

  /* Commeting this function bcz its getting called everytime and changes the value to online we want both to
     work with ngStyle directive.
  getserverStatus(){
    return this.serverStatus = "Online"
  }
   */

  ngOnInit(): void {
  }

  //Implementing event Databinding, after created word its combined data binding.
  onServerCreating() {
    this.serverCreationStatus = "Server is created ! Name is" + this.enterServer
  }

  getColor() {
    return this.serverStatus === 'Online' ? 'Green' : "Red";
  }
}
