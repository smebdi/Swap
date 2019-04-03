import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Untappd, UntappdExtract } from '../model/untappd.model';

@Injectable()
export class UntappdService {
  constructor(private http: HttpClient) { }
  baseUrl = 'https://djangular-back-end.appspot.com/api/searchtap/';

  getRateBeer() {
    return this.http.get<Untappd[]>(this.baseUrl);
  }

  getCustomBeerResponse(): Observable<HttpResponse<Untappd>> {
    return this.http.get<Untappd>(
      this.baseUrl, { observe: 'response' });
  }

  searchUntappdBeer(searchTerm: string, brewery?: string) {
    console.log('searching untappd')
    return (!brewery) ?
      this.http.get<UntappdExtract>(this.baseUrl + searchTerm) :
      this.http.get<UntappdExtract>(this.baseUrl + searchTerm + '/' + brewery);
  }
}
