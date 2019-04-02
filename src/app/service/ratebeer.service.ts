import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { RateBeer, RateBeerExtract } from '../model/ratebeer.model';

@Injectable()
export class RateBeerService {
  constructor(private http: HttpClient) { }
  baseUrl = 'https://djangular-back-end.appspot.com/api/search/';

  getRateBeer() {
    return this.http.get<RateBeer[]>(this.baseUrl);
  }

  getCustomBeerResponse(): Observable<HttpResponse<RateBeer>> {
    return this.http.get<RateBeer>(
      this.baseUrl, { observe: 'response' });
  }

  searchRateBeer(searchType: string, searchTerm: string, page?: number) {
    console.log('searching ratebeer')
    const res = (!page) ?
      this.http.get<RateBeerExtract>(this.baseUrl + searchType + '/' + searchTerm) :
      this.http.get<RateBeerExtract>(this.baseUrl + searchType + '/' + searchTerm + '/' + page);
    return res;
  }
}
