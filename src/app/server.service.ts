import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    // return an Observable
    return this.http.post('https://angular4-http-4c6ed.firebaseio.com/serverdata.json', servers);
  }
}
