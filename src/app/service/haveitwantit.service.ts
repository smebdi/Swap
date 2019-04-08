import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntappdBeer } from '../model/untappd.model';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HaveItWantIt {

  macroBeer: UntappdBeer[];
  microBeer: UntappdBeer[];
  microArr: UntappdBeer[];
  macroArr: UntappdBeer[];

  constructor(private http: HttpClient) {
  }

  iWantIt(beer: UntappdBeer) {
    return this.http.post<any>(`${environment.apiUrl}/api/iwantit`, { beer })
    .pipe(map(data => { return data; }));
  }

  pushFeedIntoMicroArray(beer: UntappdBeer) {
    return (this.microArr) ? this.microArr.push(beer) : this.microArr = [beer];
  }

  pushFeedIntoMacroArray(beer: UntappdBeer) {
    return (this.macroArr) ? this.macroArr.push(beer) : this.macroArr = [beer];
  }

}
