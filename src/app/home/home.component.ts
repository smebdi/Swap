import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../service/navbar.service';
import { FeedService } from '../service/feed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public nav: NavbarService, private feedService: FeedService) { }

  visibleSearch = true;

  ngOnInit() {
    this.nav.show();

    let feed: number;
    let count: number;
    do {
      feed = this.feedService.feedControl(false);
      count += 1;
    }
    while (feed >= 4 && count < 3);
  }

}
