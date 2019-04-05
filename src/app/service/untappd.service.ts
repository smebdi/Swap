import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Untappd, UntappdExtract, UntappdExtractById } from '../model/untappd.model';

@Injectable()
export class UntappdService {
  constructor(private http: HttpClient) { }
  idBaseUrl = 'https://djangular-back-end.appspot.com/api/tap/';
  searchBaseUrl = 'https://djangular-back-end.appspot.com/api/searchtap/';

  getCustomBeerResponse(): Observable<HttpResponse<Untappd>> {
    return this.http.get<Untappd>(
      this.searchBaseUrl, { observe: 'response' });
  }

  searchUntappdBeer(searchTerm: string, brewery?: string) {
    console.log('searching untappd')
    return (!brewery) ?
      this.http.get<UntappdExtract>(this.searchBaseUrl + searchTerm) :
      this.http.get<UntappdExtract>(this.searchBaseUrl + searchTerm + '/' + brewery);
  }

  getUntappdBeerById(id: number) {
    console.log(`searching for beer ${id}`);
    return this.http.get<UntappdExtractById>(this.idBaseUrl + id);
  }
}
