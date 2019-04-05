import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntappdService } from '../service/untappd.service';
import { RateBeerService } from '../service/ratebeer.service';
import { NavbarService } from '../service/navbar.service';
import { Untappd, UntappdBeer } from '../model/untappd.model';

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
    private untappdService: UntappdService) {
      this.route.params.subscribe( params => {
        this.getBeerData(params.query);
        this.setPlaceholder(params.query);
      });
   }

  searchForm: FormGroup;
  items: Array<Untappd>;
  query: string;
  page: number;
  placeholder: string;
  item: Untappd;

  user: any;

  setPlaceholder(placeholder: any) {
    this.placeholder = placeholder;
  }

  ngOnInit() {
    this.nav.hide();
    const searchterm = '';
    this.searchForm = this.formBuilder.group({
      searchterm
    });

    this.user = {};
    this.user.liked = {}
    this.user.liked.feedids = [];
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

  iHaveIt(beer: UntappdBeer) {
    console.log(beer);
  }

  iWantIt(beer: UntappdBeer) {
    console.log(beer);
  }

}
