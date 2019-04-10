import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntappdBeer, Untappd } from '../model/untappd.model';
import { environment } from '../../environments/environment';
import { AuthenticationService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HaveItWantIt {

  macroBeer: UntappdBeer[];
  microBeer: UntappdBeer[];
  microArr: UntappdBeer[];
  macroArr: UntappdBeer[];

  constructor(private http: HttpClient, public authenticationService: AuthenticationService) {
  }

  iWantIt(beer: UntappdBeer) {
    console.log(`posting to: ${environment.apiUrl}/api/:userid/iwantit`)
    
    if (this.authenticationService.userData && this.authenticationService.userData.uid) {
      return this.http.post<any>(`${environment.apiUrl}/api/${this.authenticationService.userData.uid}/iwantit`, { beer }).pipe(data => {
          console.log(data)
          return data; 
      });
    }

  }

  iCanGetIt(beer: UntappdBeer) {
    console.log(`posting to: ${environment.apiUrl}/api/:userid/icangetit`)
    
    if (this.authenticationService.userData && this.authenticationService.userData.uid) {
      return this.http.post<any>(`${environment.apiUrl}/api/${this.authenticationService.userData.uid}/icangetit`, { beer }).pipe(data => {
          console.log(data)
          return data; 
      });
    }

  }

  iHaveIt(beer: UntappdBeer) {
    console.log(`posting to: ${environment.apiUrl}/api/:userid/ihaveit`)

    if (this.authenticationService.userData && this.authenticationService.userData.uid) {
      return this.http.post<any>(`${environment.apiUrl}/api/${this.authenticationService.userData.uid}/ihaveit`, { beer }).pipe(data => {
          console.log(data)
          return data; 
      });
    }
    
  }

  iLikeIt(beer: Untappd) {
    console.log(`posting to: ${environment.apiUrl}/api/:userid/likebeer`)
    
    // don't require account to like anything, just bind to localStorage instance
    if (this.authenticationService.userData && this.authenticationService.userData.uid) {
      return this.http.post<any>(`${environment.apiUrl}/api/${this.authenticationService.userData.uid}/likebeer`, { beer })
      .pipe(data => {
          console.log(data)
          return data;
        })
    }
  }

  getWants(uid?: string) {
    console.log(`getting ${environment.apiUrl}/api/${this.authenticationService.userData.uid}/wants`)
    return (uid) ?
    this.http.get<any>(`${environment.apiUrl}/api/${uid}/wants`).pipe(data => data) : 
    this.http.get<any>(`${environment.apiUrl}/api/${this.authenticationService.userData.uid}/wants`).pipe(data => {
      console.log(data)
      return data
    })
  }

  getCanGets(uid?: string) {
    console.log(`getting can gets`)
    return (uid) ? 
    this.http.get<any>(`${environment.apiUrl}/api/${uid}/cangets`).pipe(data => data) :
    this.http.get<any>(`${environment.apiUrl}/api/${this.authenticationService.userData.uid}/cangets`).pipe(data => {
      console.log(data)
      return data
    })
  }

  getHas(uid?: string) {
    console.log(`getting has`)
    return (uid) ? 
    this.http.get<any>(`${environment.apiUrl}/api/${uid}/has`).pipe(data => data) :
    this.http.get<any>(`${environment.apiUrl}/api/${this.authenticationService.userData.uid}/has`).pipe(data => {
      console.log(data)
      return data
    })
  }

  getLikes(uid?: string) {
    console.log(`getting likes`)
    return (uid) ?
    this.http.get<any>(`${environment.apiUrl}/api/${uid}/likes`).pipe(data => data) :
    this.http.get<any>(`${environment.apiUrl}/api/${this.authenticationService.userData.uid}/likes`).pipe(data => {
      console.log(data)
      return data
    })
  }

}
