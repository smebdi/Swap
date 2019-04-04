import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../service/navbar.service';
import { FeedService } from '../service/feed.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public nav: NavbarService, private feedService: FeedService, private route: Router) {
    route.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (!val.urlAfterRedirects.includes('swap')) {
          this.reduceFeed();
        }
      }
    });
  }

  visibleSearch = true;

  ngOnInit() {
    this.nav.show();
    this.reduceFeed();
  }

  async reduceFeed() {
    this.feedService.getHomeFeed();
  }

}
