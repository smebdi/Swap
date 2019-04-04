import { Component, OnInit } from '@angular/core';
import { UntappdBeer } from '../model/untappd.model';
import { SwapService } from '../service/swap.service';
import { FeedService } from '../service/feed.service';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.css']
})
export class SwapComponent implements OnInit {

  micro: UntappdBeer[];
  macro: UntappdBeer[];

  constructor(private swapService: SwapService, private feedService: FeedService) {
    this.micro = this.getArray('micro');
    this.macro = this.getArray('macro');
  }

  ngOnInit() {
    if (!this.micro) { this.micro = this.getArray('micro'); }
    if (!this.macro) { this.macro = this.getArray('micro'); }

    let feed: number;
    let count: number;
    do {
      feed = this.feedService.feedControl(true);
      count += 1;
    }
    while (feed < 8 && count < 3);
  }

  getArray(type: string) {
    return this.swapService.getTopBeerArray(type);
  }

  seeLessFeed() {
    this.feedService.feedControl(false);
  }

  seeMoreFeed() {
    this.feedService.feedControl(true);
  }

}
