import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavbarService } from '../../service/navbar.service';
import { ChatService } from '../../service/chat.service';
import { AuthenticationService } from '../../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  constructor(
    public auth: AuthenticationService,
    private formBuilder: FormBuilder, 
    private router: Router, 
    public nav: NavbarService,
    private messages: ChatService
  ) { }

  visibleSearch: boolean;
  navSearchForm: FormGroup;

  ngOnInit() {
    this.nav.show();
    const searchterm = '';
    this.navSearchForm = this.formBuilder.group({
      searchterm
    });

    var user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      if (user.uid) {
        this.nav.logIn()
        this.auth.getUserData(user.uid).subscribe(data => {
          this.auth.getUserDataFromUsername(data.username).subscribe(userData => {
            this.nav.setUserProfileImage(userData.imageUrl)
          })
        })
        this.messages.getUnreadMessagesCount(user.uid).subscribe(data => {
          this.nav.setUnreadMessages(data)
        })
      } else this.nav.logOut()
    } else this.nav.logOut()
  }

  onSubmit() {
    if (this.navSearchForm.value.searchterm) {
      this.router.navigate([`search/${this.navSearchForm.value.searchterm}/1`]);
      this.navSearchForm.reset();
    }
  }
}
