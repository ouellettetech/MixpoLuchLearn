import { Component, OnInit } from '@angular/core';

@Component({
//  selector: '[app-servers]', // attribute
//  selector: '.app-servers', //class
  selector: 'app-server', //element
  template: `
  <app-server></app-server>
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
