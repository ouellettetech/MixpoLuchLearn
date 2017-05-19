import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerSerice {
    constructor(private http: Http) {}
    storeServers(servers: any[]) {
        return this.http.post('https://udemy-ng-http-be9e7.firebaseio.com/data.json', servers);
    }
}