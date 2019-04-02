import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { RateBeer } from '../model/ratebeer.model';

@Injectable()
export class RateBeerService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://127.0.0.1:8000/api/search/';

  getRateBeer() {
    return this.http.get<RateBeer[]>(this.baseUrl);
  }

  getCustomBeerResponse(): Observable<HttpResponse<RateBeer>> {
    return this.http.get<RateBeer>(
      this.baseUrl, { observe: 'response' });
  }

  searchRateBeer(searchType: string, searchTerm: string, page?: number) {
    if (!page) {
      return this.http.get<RateBeer>(this.baseUrl + searchType + "/" + searchTerm);
    }
    else return this.http.get<RateBeer>(this.baseUrl + searchType + "/" + searchTerm + "/" + page);
  }

  createCustomBeer(customBeer: RateBeer) {
    return this.http.post(this.baseUrl, customBeer);
  }

  updateCustomBeer(customBeer: RateBeer) {
    console.log(customBeer)
    return this.http.put(this.baseUrl + customBeer.id, customBeer);
  }

  deleteCustomBeer(id: number) {
    return this.http.delete(this.baseUrl + id);
  }
}
