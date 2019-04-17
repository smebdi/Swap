import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntappdService } from '../service/untappd.service';
import { NavbarService } from '../service/navbar.service';
import { Untappd, UntappdBeer } from '../model/untappd.model';
import { HaveItWantIt } from '../service/haveitwantit.service';
import { AuthenticationService } from '../service/auth.service';

@Component({
  selector: 'app-find-beer',
  templateUrl: './find-beer.component.html',
  styleUrls: ['./find-beer.component.css']
})
export class FindBeerComponent implements OnInit {
  constructor(
      public nav: NavbarService,
      private formBuilder: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private untappdService: UntappdService,
      private haveItWantIt: HaveItWantIt,
      private authService: AuthenticationService
    ) {
      this.route.params.subscribe( params => {
        this.getBeerData(params.query);
        this.setPlaceholder(params.query);
        var user = JSON.parse(localStorage.getItem("user"))
        if (user && user.uid) this.getUserData(user.uid) 
        else this.getUserData()
      });
   }

  searchForm: FormGroup;
  items: Array<Untappd>;
  query: string;
  page: number;
  placeholder: string;
  item: Untappd;

  user: any;
  username: string;

  likes: any[];

  setPlaceholder(placeholder: any) {
    this.placeholder = placeholder;
  }

  ngOnInit() {
    this.nav.hide();
    const searchterm = '';
    this.searchForm = this.formBuilder.group({
      searchterm
    });

    this.user = {}
    this.user.liked = {}
    this.user.liked.feedids = [];

    var localUser = JSON.parse(localStorage.getItem("user"))
    if (localUser && localUser.uid) this.populateLikes(localUser.uid);

    this.haveItWantIt.getWantsByBeer(1562806).subscribe(data => {
      console.log(data)
    })
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

  getBeerData(query) {
    this.untappdService.searchUntappdBeer(query)
    .subscribe(
      data => {
        this.items = data.response.beers.items.map((v) => {
          return v;
        });
      }
    );
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

  addLike(item: Untappd) {
    if (!this.user.liked.feedids.includes(item.beer.bid)) {
      this.user.liked.feedids.push(item.beer.bid);
      item.checkin_count ? item.checkin_count += 1 : item.checkin_count = 1;

      this.haveItWantIt.iLikeIt(item, this.username).subscribe(
        data => {
          console.log(data)
        }
      )
    }
  }

  goToDetail(id: number) {
    try {
      this.router.navigate([`/detail/${id}`]);
    } catch (e) {
      console.log(e);
    }
  }

  goToBrewDetail() {
    try {
      console.log('test2');
    } catch (e) {
      console.log(e);
    }
  }

  search() {
    if (this.searchForm.value.searchterm) {
      this.router.navigate([`search/${this.searchForm.value.searchterm}/1`]);
      this.searchForm.reset();
    }
  }

  iWantIt(beer: UntappdBeer) {
    const response = this.haveItWantIt.iWantIt(beer, this.username);
    (response) ? response.subscribe(data => console.log(data)) : this.router.navigate(['login'])
  }

  iHaveIt(beer: UntappdBeer) {
    const response = this.haveItWantIt.iHaveIt(beer, this.username);
    (response) ? response.subscribe(data => console.log(data)) : this.router.navigate(['login'])
  }

  iCanGetIt(beer: UntappdBeer) {
    const response = this.haveItWantIt.iCanGetIt(beer, this.username);
    (response) ? response.subscribe(data => console.log(data)) : this.router.navigate(['login'])
  }

}
