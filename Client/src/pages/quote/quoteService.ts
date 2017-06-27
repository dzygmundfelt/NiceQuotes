import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class QuoteService {

  constructor(private _http:Http) {

  }

  deleteQuote(id:Number) : Observable<any> {
    console.log("DELETED " + 'http://localhost:8080/quotes/' + id);
    return this._http.delete('http://localhost:8080/quotes/' + id);
  }

  getQuote(id:Number) : Observable<any> {
    console.log("HI!");
    return this._http.get('http://localhost:8080/quotes/' + id)
      .map(res => res.json());
  }

  updateQuote(id: Number, quote: any) : Observable<any> {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this._http.put('http://localhost:8080/quotes/' + id,
      JSON.stringify(quote), {headers: headers})
  }

}
