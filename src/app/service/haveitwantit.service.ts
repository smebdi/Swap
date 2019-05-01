import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntappdBeer, Untappd } from '../model/untappd.model';
import { environment } from '../../environments/environment';
import { AuthenticationService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HaveItWantIt {

  macroBeer: UntappdBeer[];
  microBeer: UntappdBeer[];
  microArr: UntappdBeer[];
  macroArr: UntappdBeer[];

  constructor(private http: HttpClient, private router: Router, public authenticationService: AuthenticationService) {
    
  }

  iWantIt(beer: UntappdBeer, username: string) {
    if (this.authenticationService.userData && this.authenticationService.userData.uid) {
      return this.http.post<any>(`${environment.apiUrl}/api/user/${this.authenticationService.userData.uid}/iwantit`, { 
        beer: beer,
        username: username
      })
      .pipe(data => { return data });
    }

  }

  iCanGetIt(beer: UntappdBeer, username: string) {
    if (this.authenticationService.userData && this.authenticationService.userData.uid) {
      return this.http.post<any>(`${environment.apiUrl}/api/user/${this.authenticationService.userData.uid}/icangetit`, { 
        beer: beer, 
        username: username
      })
      .pipe(data => { return data });
    }

  }

  iHaveIt(beer: UntappdBeer, username: string) {
    if (this.authenticationService.userData && this.authenticationService.userData.uid) {
      return this.http.post<any>(`${environment.apiUrl}/api/user/${this.authenticationService.userData.uid}/ihaveit`, { 
        beer: beer, 
        username: username
      })
      .pipe(data => { return data });
    }
    
  }

  iLikeIt(beer: Untappd, username: string) {
    if (this.authenticationService.userData && this.authenticationService.userData.uid) {
      return this.http.post<any>(`${environment.apiUrl}/api/user/${this.authenticationService.userData.uid}/likebeer`, { 
        beer: beer, 
        username: username
      })
      .pipe(data => { return data })
    }
  }

  getWants(uid?: string) {
    try {
      return (uid) ?
      this.http.get<any>(`${environment.apiUrl}/api/user/${uid}/wants`).pipe(data => data) : 
      this.http.get<any>(`${environment.apiUrl}/api/user/${this.authenticationService.userData.uid}/wants`).pipe(data => { return data })
    }
    catch {
      this.router.navigate(['/login']);
    }
  }

  getCanGets(uid?: string) {
    try {
      return (uid) ? 
      this.http.get<any>(`${environment.apiUrl}/api/user/${uid}/cangets`).pipe(data => data) :
      this.http.get<any>(`${environment.apiUrl}/api/user/${this.authenticationService.userData.uid}/cangets`).pipe(data => { return data })
    }
    catch {
      this.router.navigate(['/login']);
    }
  }

  getHas(uid?: string) {
    try {
      return (uid) ? 
      this.http.get<any>(`${environment.apiUrl}/api/user/${uid}/has`).pipe(data => data) :
      this.http.get<any>(`${environment.apiUrl}/api/user/${this.authenticationService.userData.uid}/has`).pipe(data => { return data })
    }
    catch {
      this.router.navigate(['/login']);
    }
  }

  getLikes(uid?: string) {
    try {
      return (uid) ?
      this.http.get<any>(`${environment.apiUrl}/api/user/${uid}/likes`).pipe(data => data) :
      this.http.get<any>(`${environment.apiUrl}/api/user/${this.authenticationService.userData.uid}/likes`).pipe(data => { return data })
    }
    catch {
      this.router.navigate(['/login']);
    }
  }

  getWantsByBeer(bid: number|string) {
    return this.http.get<any>(`${environment.apiUrl}/api/beer/${bid}/wants`).pipe(data => data)
  }
  getCanGetsByBeer(bid: number|string) {
    return this.http.get<any>(`${environment.apiUrl}/api/beer/${bid}/cangets`).pipe(data => data)
  }
  getHasByBeer(bid: number|string) {
    return this.http.get<any>(`${environment.apiUrl}/api/beer/${bid}/has`).pipe(data => data)
  }
  getLikesByBeer(bid: number|string) {
    return this.http.get<any>(`${environment.apiUrl}/api/beer/${bid}/likes`).pipe(data => data)
  }

}
