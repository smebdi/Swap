import { Component, OnInit } from '@angular/core';
import { UntappdService } from '../../service/untappd.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UntappdBeerById, UntappdBeer, Untappd, UntappdBrewery } from '../../model/untappd.model';
import { HaveItWantIt } from '../../service/haveitwantit.service';
import { AuthenticationService } from '../../service/auth.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class BeerDetailComponent implements OnInit {

  beer: UntappdBeerById;
  mappedBeer: UntappdBeer;
  mappedObject: Untappd;
  mappedBrewery: UntappdBrewery;
  likeObject: Untappd;
  user: any;
  relatedActivity: boolean;
  username: string;

  havers: any[];
  cangetters: any[];
  wanters: any[];
  likes: any[];

  constructor(
      private route: ActivatedRoute, 
      private untappdService: UntappdService, 
      private router: Router,
      private haveItWantIt: HaveItWantIt,
      private authService: AuthenticationService
    ) {
    this.route.params.subscribe(params => {

      this.getBeerDataById(params.bid);
      this.getPros(params.bid);
      this.getPosers(params.bid);

      /* angular requirement to initialize objects before use */
      this.mappedBeer = { bid: 0 }
      this.mappedBrewery = { brewery_id: '0' }
      this.mappedObject = { beer: this.mappedBeer, brewery: this.mappedBrewery }

      var user = JSON.parse(localStorage.getItem("user"))
      if (user && user.uid) this.getUserData(user.uid) 
      else this.getUserData()
    });
  }

  clearData() {
    this.havers = [];
    this.cangetters = [];
    this.wanters = [];
    this.likes = [];
  }

  getUserData(uid?: string) {
    console.log('getting user data')
    if (uid) {
      this.authService.getUserData(uid).subscribe(data => {
        if (data) {
          console.log('data exists')
          this.username = data.username
        }
        if (this.authService.userData && this.authService.userData.displayName) {
          console.log('userData exists')
          this.username = this.authService.userData.displayName
        }
      })
    }
  }

  ngOnInit() {
    this.clearData();

    this.user = {};
    this.user.liked = {};
    this.user.liked.feedids = [];
    this.relatedActivity = true;

    var localUser = JSON.parse(localStorage.getItem("user"))
    if (localUser && localUser.uid) this.populateLikes(localUser.uid);
  }

  getPros(bid: number) {
    this.havers = [];
    this.cangetters = [];

    this.haveItWantIt.getHasByBeer(bid).subscribe(data => {
      if (data) for (const [key, value] of Object.entries(data)) {
        if (data) this.havers.push({
          username: key,
          uid: value['uid'],
          imageUrl: 'http://bootdey.com/img/Content/user_1.jpg'
        })
      }
    })

    this.haveItWantIt.getCanGetsByBeer(bid).subscribe(data => {
      if (data) for (const [key, value] of Object.entries(data)) {
        if (data) this.cangetters.push({
          username: key,
          uid: value['uid'],
          imageUrl: 'http://bootdey.com/img/Content/user_1.jpg'
        })
      }
    })
  }

  getPosers(bid: number) {
    this.wanters = [];

    this.haveItWantIt.getWantsByBeer(bid).subscribe(data => {
      if (data) for (const [key, value] of Object.entries(data)) {
        if (data) this.wanters.push({
          username: key,
          uid: value['uid'],
          imageUrl: 'http://bootdey.com/img/Content/user_1.jpg'
        })
      }
    })
  }

  getBeerDataById(bid: number) {
    // pulls data from python api
    this.untappdService.getUntappdBeerById(bid)
    .subscribe(data => {
      this.beer = data.response.beer;
    });
  }

  goToBeerDetail(id: number) {
    try {
      this.router.navigate([`/detail/${id}`]);
    } catch (e) {
      console.log(e);
    }
  }

  goToBreweryDetail(id: number) {
    try {
      this.router.navigate([`/detail/${id}`]);
    } catch (e) {
      console.log(e);
    }
  }

  goToUserDetail(username: string) {
    this.router.navigate([`profile/${username}`])
  }

  populateLikes(uid?: string) {
    const likesData = this.haveItWantIt.getLikes(uid);
    if (likesData) likesData.subscribe(data => {
      if (data) {
        this.likes = Object.keys(data).map(function(item) {
          if (data[item]) return data[item]
        })
        this.likes.map((v) => {
          this.user.liked.feedids.push(v.bid)
        })
      }
    })
  }

  addLike(item: UntappdBeerById) {
    if (!this.user.liked.feedids.includes(item.bid)) {
      this.user.liked.feedids.push(item.bid);
      item.likes ? item.likes += 1 : item.likes = 1;
      
      this.mapUntappdById(item)
      this.haveItWantIt.iLikeIt(this.mappedObject, this.username).subscribe(
        data => { console.log(data) }
      )
    }
  }

  iWantIt(beer: UntappdBeerById) {
    this.mapBeerById(beer)
    this.haveItWantIt.iWantIt(this.mappedBeer, this.username).subscribe(
      data => (!data) ? this.router.navigate(['login']) : console.log(data)
    )
  }

  iHaveIt(beer: UntappdBeerById) {
    this.mapBeerById(beer)
    this.haveItWantIt.iHaveIt(this.mappedBeer, this.username).subscribe(
      data => (!data) ? this.router.navigate(['login']) : console.log(data)
    )
  }

  iCanGetIt(beer: UntappdBeerById) {
    this.mapBeerById(beer)
    this.haveItWantIt.iCanGetIt(this.mappedBeer, this.username).subscribe(
      data => (!data) ? this.router.navigate(['login']) : console.log(data)
    )
  }

  mapUntappdById(beer: UntappdBeerById) {
    // mapping detail object to like object
    this.mapBeerById(beer)
    this.mappedObject.beer = this.mappedBeer
    this.mappedObject.brewery = beer.brewery
    this.mappedObject.likes = beer.likes
  }

  mapBeerById(beer: UntappdBeerById) {
    // mapping because beer detail pulls a different object from API
    this.mappedBeer.bid = beer.bid
    this.mappedBeer.beer_name = beer.beer_name
    this.mappedBeer.beer_label = beer.beer_label
    this.mappedBeer.beer_abv = beer.beer_abv
    this.mappedBeer.beer_ibu = beer.beer_ibu
    this.mappedBeer.beer_description = beer.beer_description
    this.mappedBeer.style_name = beer.beer_style
  }

}
