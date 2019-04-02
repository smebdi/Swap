import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CustomBrewery } from "../model/custom-brewery.model";
import { of, Observable } from 'rxjs';

@Injectable()
export class CustomBreweryService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://djangular-back-end.appspot.com/api/brewery/';

  getCustomBrewerys() {
    return this.http.get<CustomBrewery[]>(this.baseUrl);
  }

  getCustomBreweryResponse(): Observable<HttpResponse<CustomBrewery>> {
    return this.http.get<CustomBrewery>(
      this.baseUrl, { observe: 'response' });
  }

  getCustomBreweryById(id: number) {
    return this.http.get<CustomBrewery>(this.baseUrl + id);
  }

  createCustomBrewery(customBrewery: CustomBrewery) {
    return this.http.post(this.baseUrl, customBrewery);
  }

  updateCustomBrewery(customBrewery: CustomBrewery) {
    console.log(customBrewery)
    return this.http.put(this.baseUrl + customBrewery.id, customBrewery);
  }

  deleteCustomBrewery(id: number) {
    return this.http.delete(this.baseUrl + id);
  }
}
