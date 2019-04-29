import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {

  user: any;

  visible: boolean;
  loggedIn: boolean;

  imageUrl: string;
  unreadMessages: number;

  constructor() {
    this.unreadMessages = 0
    this.visible = false; 
    this.start()
  }

  public start(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.loggedIn = (this.user !== null && this.user.emailVerified !== false) ? true : false;
  }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  logIn() { this.loggedIn = true }

  logOut() { this.loggedIn = false }

  setUserProfileImage(url) { this.imageUrl = url }

  setUnreadMessages(count) { this.unreadMessages = count }

}