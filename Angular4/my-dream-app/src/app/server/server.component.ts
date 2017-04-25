import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponet {
    serverId: number = 10;
    serverStatus: string = 'offline';

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red'; 
    }
    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }
}