import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomBeerService } from '../service/custom-beer.service';
import { CustomBeer } from '../model/custom-beer.model';

@Component({
  selector: 'app-custom-beer',
  templateUrl: './custom-beer.component.html',
  styleUrls: ['./custom-beer.component.css']
})
export class CustomBeerComponent implements OnInit {

  constructor(private router: Router, private customBeerService: CustomBeerService) { }

  customBeer: CustomBeer[];

  ngOnInit() {
    this.customBeerService.getCustomBeers()
      .subscribe( data => {
        this.customBeer = data;
      });
  }

  deleteCustomBeer(customBeer: CustomBeer): void {
    this.customBeerService.deleteCustomBeer(customBeer.id)
      .subscribe( data => {
        this.customBeer = this.customBeer.filter(cb => cb !== customBeer);
      })
  };

  editCustomBeer(customBeer: CustomBeer): void {
    localStorage.removeItem('editCustomBeerId');
    localStorage.removeItem('editCustomBeerName');
    localStorage.removeItem('editCustomBeerBrewery');
    localStorage.removeItem('editCustomBeerIBU');
    localStorage.removeItem('editCustomBeerABV');
    localStorage.removeItem('editCustomBeerStyle');
    localStorage.removeItem('editCustomBeerDescription');
    localStorage.removeItem('editCustomBeerImageUrl');

    localStorage.setItem('editCustomBeerId', customBeer.id.toString());
    localStorage.setItem('editCustomBeerName', customBeer.name.toString());
    localStorage.setItem('editCustomBeerBrewery', customBeer.brewery.toString());
    localStorage.setItem('editCustomBeerIBU', customBeer.ibu.toString());
    localStorage.setItem('editCustomBeerABV', customBeer.abv.toString());
    localStorage.setItem('editCustomBeerStyle', customBeer.style.toString());
    localStorage.setItem('editCustomBeerDescription', customBeer.description.toString());
    localStorage.setItem('editCustomBeerImageUrl', customBeer.imageUrl.toString());

    this.router.navigate(['beer/edit']);
  };

  addCustomBeer(): void {
    this.router.navigate(['beer/add']);
  };
}
