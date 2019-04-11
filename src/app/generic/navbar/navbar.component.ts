import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavbarService } from '../../service/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, public nav: NavbarService) { }

  visibleSearch: boolean;
  navSearchForm: FormGroup;
  loggedIn: boolean;

  ngOnInit() {
    this.nav.show();
    const searchterm = '';
    this.navSearchForm = this.formBuilder.group({
      searchterm
    });

    var user = JSON.parse(localStorage.getItem("user"))
      if (user) { 
        if (user.uid) this.loggedIn = true
        else this.loggedIn = false
      } else this.loggedIn = false
  }

  onSubmit() {
    if (this.navSearchForm.value.searchterm) {
      this.router.navigate([`search/${this.navSearchForm.value.searchterm}/1`]);
      this.navSearchForm.reset();
    }
  }
}
