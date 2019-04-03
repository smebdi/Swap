import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RateBeerService } from '../service/ratebeer.service';
import { RateBeer } from '../model/ratebeer.model';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-find-beer',
  templateUrl: './find-beer.component.html',
  styleUrls: ['./find-beer.component.css']
})
export class FindBeerComponent implements OnInit {
  constructor(
    public nav: NavbarService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private rateBeerService: RateBeerService) {
      this.route.params.subscribe( params => {
        this.getBeerData(params.query, params.page);
        this.setPlaceholder(params.query);
      });
   }

  searchForm: FormGroup;
  items: [RateBeer];
  query: string;
  page: number;
  placeholder: string;

  setPlaceholder(placeholder: any) {
    this.placeholder = placeholder;
  }

  ngOnInit() {
    this.nav.hide();
    const searchterm = '';
    this.searchForm = this.formBuilder.group({
      searchterm
    });
  }

  getBeerData(query, page) {
    this.rateBeerService.searchRateBeer('beer', query, page)
    .subscribe(
      data => {
        this.items = data.data.beerSearch.items;
        this.items[0].likes = 1;
      }
    );
  }

  addLike(item) {
    item.likes ? item.likes += 1 : item.likes = 1;
  }

  goToDetail() {
    try {
      console.log('test');
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

  onSubmit() {  }

}
