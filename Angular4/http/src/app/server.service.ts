import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ServerSerice {
    constructor(private http: Http) {}
    storeServers(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://udemy-ng-http-be9e7.firebaseio.com/data.json',
            servers,
            {headers: headers});
    }
}
