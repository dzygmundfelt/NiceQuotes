import{Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class CreateService {

  constructor(private _http:Http) {

  }

  addQuote(quote: any): Observable<any> {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this._http.post("http://localhost:8080/quotes/", JSON.stringify(quote), {headers: headers});
  }

}
