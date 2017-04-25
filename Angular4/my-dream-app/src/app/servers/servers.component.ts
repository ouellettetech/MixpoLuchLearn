import { Component, OnInit } from '@angular/core';

@Component({
//  selector: '[app-servers]', // attribute
//  selector: '.app-servers', //class
  selector: 'app-servers', //element
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Test Server', 'Test Server 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is '+ this.serverName;
  }
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;

  }
}
