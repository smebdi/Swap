import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Firebase
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { User } from  '../model/user.model';
import { AngularFireAuth } from  "@angular/fire/auth";

import { environment } from '../../environments/environment';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { NavbarService } from './navbar.service';

@Injectable()
export class AuthenticationService {

    // user: User;
    userData: any;

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
          /* Call the SendVerificaitonMail() function when new user sign up and returns promise */
          this.SendVerificationMail();
          this.SetUserData(result.user);

          console.log('posting create user')
          this.http.post<any>(`${environment.apiUrl}/api/username/${username}/create`, {uid: result.user.uid})
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
  SetUserData(user: User) {
    console.log(user);
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
}