import { Component, OnInit } from '@angular/core';
import { UntappdService } from '../../service/untappd.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UntappdBeerById, UntappdBeer, Untappd, UntappdBrewery } from '../../model/untappd.model';
import { HaveItWantIt } from '../../service/haveitwantit.service';

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

  constructor(
      private route: ActivatedRoute, 
      private untappdService: UntappdService, 
      private router: Router,
      private haveItWantIt: HaveItWantIt
    ) {
    this.route.params.subscribe(params => {

      this.getBeerDataById(params.bid);

      /* angular requirement to initialize objects before use */
      this.mappedBeer = { bid: 0 }
      this.mappedBrewery = { brewery_id: '0' }
      this.mappedObject = { beer: this.mappedBeer, brewery: this.mappedBrewery }

    });
  }

  ngOnInit() {
    this.user = {};
    this.user.liked = {};
    this.user.liked.feedids = [];
    this.relatedActivity = true;
  }

  getBeerDataById(bid: number) {
    this.untappdService.getUntappdBeerById(bid)
    .subscribe(
      data => {
        this.beer = data.response.beer;
      }
    );
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

  addLike(item: UntappdBeerById) {
    if (!this.user.liked.feedids.includes(item.bid)) {
      this.user.liked.feedids.push(item.bid);
      item.likes ? item.likes += 1 : item.likes = 1;
      
      this.mapUntappdById(item)
      console.log(this.mappedObject)
      this.haveItWantIt.iLikeIt(this.mappedObject).subscribe(
        data => {
          console.log(data)
        }
      )
    }
  }

  iWantIt(beer: UntappdBeerById) {
    this.mapBeerById(beer)
    console.log(this.mappedBeer)
    this.haveItWantIt.iWantIt(this.mappedBeer).subscribe(
      data => {
        console.log(data)
      }
    )
  }

  iHaveIt(beer: UntappdBeerById) {
    this.mapBeerById(beer)
    this.haveItWantIt.iHaveIt(this.mappedBeer).subscribe(
      data => {
        console.log(data)
      }
    )
  }

  iCanGetIt(beer: UntappdBeerById) {
    this.mapBeerById(beer)
    this.haveItWantIt.iCanGetIt(this.mappedBeer).subscribe(
      data => {
        console.log(data)
      }
    )
  }

  mapUntappdById(beer: UntappdBeerById) {
    // mapping detail object to like object
    console.log(beer)
    this.mapBeerById(beer)
    this.mappedObject.beer = this.mappedBeer
    this.mappedObject.brewery = beer.brewery
    this.mappedObject.likes = beer.likes
  }

  mapBeerById(beer: UntappdBeerById) {
    // mapping because beer detail pulls a different object from API
    console.log(beer)
    this.mappedBeer.bid = beer.bid
    this.mappedBeer.beer_name = beer.beer_name
    this.mappedBeer.beer_label = beer.beer_label
    this.mappedBeer.beer_abv = beer.beer_abv
    this.mappedBeer.beer_ibu = beer.beer_ibu
    this.mappedBeer.beer_description = beer.beer_description
    this.mappedBeer.style_name = beer.beer_style
  }

}
