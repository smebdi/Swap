import { Injectable } from '@angular/core';
import { Feed } from '../model/feed.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  feedArr: Feed[];
  item: Feed;

  constructor() {

    this.item = {
      id: 1,
      user: 'Caleb D',
      user2: 'Brian F',
      action: 'commented on a swap with',
      date: moment(Date.now()).format('lll'),
      description: 'Brian is a filthy dirty liar and sent me a Session IPA instead of the American ' +
                   'East Coast-Style he promised. You would think this fool would have a palate capa...'
    };
    this.pushFeedIntoFeedArray(this.item);

    this.item = {
      id: 2,
      user: 'Zek G',
      user2: 'Mark F',
      action: 'just swapped with',
      date: moment(Date.now()).format('lll'),
      description: `Zek G traded his <b>Good People Snakehandler</b> for<br>` +
                   'Mark F\'s <b>Cahaba Brewing American Blonde</b>'
    };
    this.pushFeedIntoFeedArray(this.item);

    this.item = {
      id: 3,
      user: 'Caleb D',
      action: 'added a beer',
      date: moment(Date.now()).format('lll'),
      description: '<b>Test Beer</b> - Test Brewery <br>' +
                   'IBU: 150 | ABV: 9 | Style: Testy <br>' +
                   'Desc: Testy AF, real testy'
    };
    this.pushFeedIntoFeedArray(this.item);

    this.item = {
      id: 4,
      user: 'Caleb D',
      action: 'updated a brewery',
      date: moment(Date.now()).format('lll'),
      description: '<b>Test Brewery (updated)</b> <br>' +
                   'with the location: <i>Uploading through website</i> <br>'
    };
    this.pushFeedIntoFeedArray(this.item);

  }

  getMostRecentFeed(num: number) {
    return (num < (this.feedArr.length - 1)) ?
      this.feedArr.slice(0, num) :
      this.feedArr;
  }

  pushFeedIntoFeedArray(feed: Feed) {
    (this.feedArr) ? this.feedArr.push(feed) : this.feedArr = [feed];
  }
}
