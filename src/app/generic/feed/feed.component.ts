import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feed } from '../../model/feed.model';
import { FeedService } from '../../service/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private router: Router, private feedService: FeedService) { }

  items: Feed[];

  ngOnInit() {
    this.items = this.feedService.getMostRecentFeed(5);
  }

  addLike(item) {
    item.likes ? item.likes += 1 : item.likes = 1;
  }

  goToFeedDetail() {
    try {
      console.log('test');
    } catch (e) {
      console.log(e);
    }
  }

}
