import { Injectable } from '@angular/core';
import { AuthenticationService } from './auth.service';

@Injectable()
export class NavbarService {
  visible: boolean;
  loggedIn: boolean;

  constructor() { 
    this.visible = false; 
    this.start()
  }

  public start(): void {
    const user = JSON.parse(localStorage.getItem('user'));
    this.loggedIn = (user !== null && user.emailVerified !== false) ? true : false;
  }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  logIn() { this.loggedIn = true }

  logOut() { this.loggedIn = false }

}