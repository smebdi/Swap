import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CustomBeer } from "../model/custom-beer.model";
import { of, Observable } from 'rxjs';

@Injectable()
export class CustomBeerService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://djangular-back-end.appspot.com/api/beer/';

  getCustomBeers() {
    return this.http.get<CustomBeer[]>(this.baseUrl);
  }

  getCustomBeerResponse(): Observable<HttpResponse<CustomBeer>> {
    return this.http.get<CustomBeer>(
      this.baseUrl, { observe: 'response' });
  }

  getCustomBeerById(id: number) {
    return this.http.get<CustomBeer>(this.baseUrl + id);
  }

  createCustomBeer(customBeer: CustomBeer) {
    return this.http.post(this.baseUrl, customBeer);
  }

  updateCustomBeer(customBeer: CustomBeer) {
    console.log(customBeer)
    return this.http.put(this.baseUrl + customBeer.id, customBeer);
  }

  deleteCustomBeer(id: number) {
    return this.http.delete(this.baseUrl + id);
  }
}
