import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CustomBreweryService } from "../service/custom-brewery.service";
import { CustomBrewery } from "../model/custom-brewery.model";

@Component({
  selector: 'app-custom-brewery',
  templateUrl: './custom-brewery.component.html',
  styleUrls: ['./custom-brewery.component.css']
})
export class CustomBreweryComponent implements OnInit {

  constructor(private router: Router, private customBreweryService: CustomBreweryService) { }

  customBrewery: CustomBrewery[];

  ngOnInit() {
    this.customBreweryService.getCustomBrewerys()
      .subscribe( data => {
        this.customBrewery = data;
      });
  }

  deleteCustomBrewery(customBrewery: CustomBrewery): void {
    this.customBreweryService.deleteCustomBrewery(customBrewery.id)
      .subscribe( data => {
        this.customBrewery = this.customBrewery.filter(cb => cb !== customBrewery);
      })
  };

  editCustomBrewery(customBrewery: CustomBrewery): void {
    // localStorage.removeItem("editCustomBreweryId");
    // localStorage.removeItem("editCustomBreweryName");
    // localStorage.removeItem("editCustomBreweryLocation");
    // localStorage.removeItem("editCustomBreweryWebsite");
    // localStorage.removeItem("editCustomBreweryImageUrl");


    // localStorage.setItem("editCustomBreweryId", customBrewery.id.toString());
    // localStorage.setItem("editCustomBreweryName", customBrewery.name.toString());
    // localStorage.setItem("editCustomBreweryLocation", customBrewery.location.toString());
    // localStorage.setItem("editCustomBreweryWebsite", customBrewery.website.toString());
    // localStorage.setItem("editCustomBreweryImageUrl", customBrewery.imageUrl.toString());

    this.router.navigate(['brewery/edit']);
  };

  addCustomBrewery(): void {
    this.router.navigate(['brewery/add']);
  };
}
