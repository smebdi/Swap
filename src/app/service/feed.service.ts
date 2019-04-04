import { Injectable } from '@angular/core';
import { Feed } from '../model/feed.model';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  feedArr: Feed[];
  item: Feed;
  moreFeed: boolean;

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
      description: `Zek G traded his <b>Good People - Snakehandler</b> for<br>` +
                   'Mark F\'s <b>Cahaba Brewing - American Blonde</b>'
    };
    this.pushFeedIntoFeedArray(this.item);

    this.item = {
      id: 3,
      user: 'Caleb D',
      action: 'added a beer',
      date: moment(Date.now()).format('lll'),
      description: '<b>Ghost Train - Blackberry Trash</b><br>' +
                   'IBU: 150 | ABV: 9 | Style: IPA <br>' +
                   'Description: Some other nasty sour nonsense we came up with'
    };
    this.pushFeedIntoFeedArray(this.item);

    this.item = {
      id: 4,
      user: 'Caleb D',
      action: 'updated a brewery',
      date: moment(Date.now()).format('lll'),
      description: '<b>Back 40 Beer Company </b>(updated) <br>' +
                   'with the location: <i>3201 1st Ave N</i>'
    };
    this.pushFeedIntoFeedArray(this.item);

  }

  getFeedLength() {
    return this.feedArr.length;
  }

  getMostRecentFeed(num: number) {
    return (num < (this.feedArr.length - 1)) ?
      this.feedArr.slice(0, num) :
      this.feedArr;
  }

  pushFeedIntoFeedArray(feed: Feed) {
    (this.feedArr) ? this.feedArr.push(feed) : this.feedArr = [feed];
  }

  getHomeFeed() {
    return this.feedArr = (this.feedArr.length > 4) ? this.feedArr.slice(0, 4) : this.feedArr;
  }

  feedControl(flip: boolean) {
    if (flip) {
      this.item = {
        id: 6,
        user: 'Caleb D',
        user2: 'Brian F',
        action: 'commented on a swap with',
        date: moment(Date.now()).format('lll'),
        description: 'Brian is a filthy dirty liar and sent me a Session IPA instead of the American ' +
                      'East Coast-Style he promised. You would think this fool would have a palate capa...'
      };
      this.pushFeedIntoFeedArray(this.item);
      this.item = {
        id: 7,
        user: 'Zek G',
        user2: 'Mark F',
        action: 'just swapped with',
        date: moment(Date.now()).format('lll'),
        description: `Zek G traded his <b>Good People - Snakehandler</b> for<br>` +
                      'Mark F\'s <b>Cahaba Brewing - American Blonde</b>'
      };
      this.pushFeedIntoFeedArray(this.item);
      this.item = {
        id: 8,
        user: 'Caleb D',
        action: 'added a beer',
        date: moment(Date.now()).format('lll'),
        description: '<b>Ghost Train - Blackberry Trash</b><br>' +
                      'IBU: 150 | ABV: 9 | Style: IPA <br>' +
                      'Description: Some other nasty sour nonsense we came up with'
      };
      this.pushFeedIntoFeedArray(this.item);
      this.item = {
        id: 9,
        user: 'Caleb D',
        action: 'updated a brewery',
        date: moment(Date.now()).format('lll'),
        description: '<b>Back 40 Beer Company </b>(updated) <br>' +
                      'with the location: <i>3201 1st Ave N</i>'
      };
      this.pushFeedIntoFeedArray(this.item);
      return this.feedArr.length;
    } else {
      this.feedArr = (this.feedArr.length >= 8) ? this.feedArr.slice(0, this.feedArr.length - 4) : this.feedArr.slice(0, 4);
      return this.feedArr.length;
    }
  }
}
