import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RateBeerService } from '../service/ratebeer.service';
import { RateBeer } from '../model/ratebeer.model';

@Component({
  selector: 'app-find-beer',
  templateUrl: './find-beer.component.html',
  styleUrls: ['./find-beer.component.css']
})
export class FindBeerComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private rateBeerService: RateBeerService) {
      this.route.params.subscribe( params => this.getBeerData(params.query, params.page) );
   }

  searchForm: FormGroup;
  items: [RateBeer];
  query: string;
  page: number;

  ngOnInit() {
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
      }
    );
  }

  onSubmit() {

  }

}
