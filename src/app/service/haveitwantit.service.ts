import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntappdBeer, Untappd } from '../model/untappd.model';
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
    console.log(`posting to: ${environment.apiUrl}/api/iwantit`)
    return this.http.post<any>(`${environment.apiUrl}/api/iwantit`, { beer })
    .pipe(data => { 
        console.log(data)
        return data; 
    });
  }

  iCanGetIt(beer: UntappdBeer) {
    console.log(`posting to: ${environment.apiUrl}/api/icangetit`)
    return this.http.post<any>(`${environment.apiUrl}/api/icangetit`, { beer })
    .pipe(data => { 
        console.log(data)
        return data; 
    });
  }

  iHaveIt(beer: UntappdBeer) {
    console.log(`posting to: ${environment.apiUrl}/api/ihaveit`)
    return this.http.post<any>(`${environment.apiUrl}/api/ihaveit`, { beer })
    .pipe(data => {
        console.log(data)
        return data; 
    });
  }

  iLikeIt(beer: Untappd) {
    console.log(`posting to: ${environment.apiUrl}/api/:userid/likebeer`)
    return this.http.post<any>(`${environment.apiUrl}/api/user1/likebeer`, { beer })
    .pipe(data => {
        console.log(data)
        return data; 
    });
  }

}
