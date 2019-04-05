import { Component, OnInit } from '@angular/core';
import { UntappdService } from '../../service/untappd.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UntappdBeerById } from '../../model/untappd.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class BeerDetailComponent implements OnInit {

  beer: UntappdBeerById;
  user: any;
  relatedActivity: boolean;

  constructor(private route: ActivatedRoute, private untappdService: UntappdService, private router: Router) {
    this.route.params.subscribe( params => {
      this.getBeerDataById(params.bid);
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
    }
  }

  iHaveIt(beer: UntappdBeerById) {
    console.log(beer);
  }

  iWantIt(beer: UntappdBeerById) {
    console.log(beer);
  }

}
