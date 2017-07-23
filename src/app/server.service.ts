import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return an Observable
    // return this.http.post('https://angular4-http-4c6ed.firebaseio.com/serverdata.json'
    //   , servers
    //   , {headers: headers} );
    return this.http.put('https://angular4-http-4c6ed.firebaseio.com/serverdata.json'
      , servers
      , {headers: headers} );
  }

  getServers() {
    return this.http.get('https://angular4-http-4c6ed.firebaseio.com/serverdata.json').map(
      (response: Response) => {
        const data = response.json();
        for (let item of data) {
          item.name = 'FETCHED_' + item.name;
        }
        return data;
      }
    );
  }
}
