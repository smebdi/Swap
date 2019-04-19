import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Firebase
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { User } from  '../model/user.model';
import { AngularFireAuth } from  "@angular/fire/auth";

import { environment } from '../../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavbarService } from './navbar.service';

@Injectable()
export class AuthenticationService {

    // user: User;
    userData: any;
    username: string;

    constructor(
        private http: HttpClient,
        public afs: AngularFirestore,   // Inject Firestore service
        public afAuth: AngularFireAuth, // Inject Firebase auth service
        public router: Router,  
        public ngZone: NgZone, // NgZone service to remove outside scope warning
        private nav: NavbarService
    ) {
        this.afAuth.authState.subscribe(user => {
            if (user) {
              this.userData = user;
              localStorage.setItem('user', JSON.stringify(this.userData));
              JSON.parse(localStorage.getItem('user'));
            } else {
              localStorage.setItem('user', null);
              JSON.parse(localStorage.getItem('user'));
            }
          })
    }

    // Sign in with email/password
  async SignIn(email: string, password: string) {
    try {
          const result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
          this.nav.logIn();
          this.ngZone.run(() => {
            this.router.navigate(['/dashboard']);
          });
          this.SetUserData(result.user);
      }
      catch (error) {
          window.alert(error.message);
      }
  }

  // Sign up with email/password
  async SignUp(username: string, email: string, password: string) {
    try {
          const result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
          this.SendVerificationMail();
          this.SetUserData(result.user, username);
      }
      catch (error) {
          window.alert(error.message);
      }
  }

  // Send email verfificaiton when new user sign up
  async SendVerificationMail() {
    await this.afAuth.auth.currentUser.sendEmailVerification();
      this.router.navigate(['verify']);
  }

  // Reset Forggot password
  async ForgotPassword(passwordResetEmail: string) {
    try {
          await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
          window.alert('Password reset email sent, check your inbox.');
      }
      catch (error) {
          window.alert(error);
      }
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  async AuthLogin(provider: auth.GoogleAuthProvider | auth.AuthProvider) {
    try {
          const result = await this.afAuth.auth.signInWithPopup(provider);
          this.ngZone.run(() => {
              this.router.navigate(['/dashboard']);
          });
          this.SetUserData(result.user);
      }
      catch (error) {
          window.alert(error);
      }
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: User, username?: string) {
    if (username) {
      this.userData.username = username
      console.log(`posting create ${username} to ${environment.apiUrl}`)
      this.http.post<any>(`${environment.apiUrl}/api/createuser/${username}/${user.uid}`, '')
      this.setUserImage(username)
    }
    if (user) {
      this.userData = user
    }
  }

  // Sign out 
  async SignOut() {
    await this.afAuth.auth.signOut();
    this.nav.logOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  isValidUsername(username: string) {
    // run some regex here to validate
    if (username) {
      const res = this.http.get<any>(`${environment.apiUrl}/api/username/${username}`)
      return res
    }
  }

  getUserData(uid?: string) {
    if (uid) {
      return this.http.get<any>(`${environment.apiUrl}/api/getuserdata/uid/${uid}`)
    } else {
      if (this.userData) {
        return this.http.get<any>(`${environment.apiUrl}/api/getuserdata/uid/${this.userData.uid}`)
      } else console.log('no uid')
    }
  }

  getUserDataFromUsername(username?: string) {
    if (username) {
      return this.http.get<any>(`${environment.apiUrl}/api/getuserdata/username/${username}`)
    } else console.log('no username')
  }

  setUsername(username: string) {
    this.username = username;
  }

  async setUserImage(uid: string, url?: string) {
    await this.getUserData(uid).subscribe(data => {
      if (url) {
        console.log('url found', data.username, url)
        this.http.post<any>(`${environment.apiUrl}/api/editprofile/username/${data.username}`, {imageUrl: url}).subscribe(data => {
          console.log(data)
        })
      } else {
        console.log('no url found', data.username)
        this.http.post<any>(`${environment.apiUrl}/api/editprofile/username/${data.username}`, {imageUrl: `${environment.localUrl}/assets/icons/1.png`}).subscribe(data => {
          console.log(data)
        })
      }
    })
  }

}