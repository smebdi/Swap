import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { CustomBeerService } from "../../service/custom-beer.service";
import { CustomBeer } from "../../model/custom-beer.model";

@Component({
  selector: 'app-edit-custom-beer',
  templateUrl: './edit-custom-beer.component.html',
  styleUrls: ['./edit-custom-beer.component.css']
})
export class EditCustomBeerComponent implements OnInit {

  customBeer: CustomBeer;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private customBeerService: CustomBeerService) { }

  ngOnInit() {
    console.log(this)
    let customBeerId = localStorage.getItem("editCustomBeerId");
    let customBeerName = localStorage.getItem("editCustomBeerName");
    let customBeerBrewery = localStorage.getItem("editCustomBeerBrewery");
    let customBeerIBU = localStorage.getItem("editCustomBeerIBU");
    let customBeerABV = localStorage.getItem("editCustomBeerABV");
    let customBeerStyle = localStorage.getItem("editCustomBeerStyle");
    let customBeerDescription = localStorage.getItem("editCustomBeerDescription");
    let customBeerImageUrl = localStorage.getItem("editCustomBeerImageUrl");

    if(!customBeerId) {
      alert("Invalid action.")
      this.router.navigate(['beer']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [customBeerId],
      name: [customBeerName, Validators.required],
      brewery: [customBeerBrewery, Validators.required],
      ibu: [customBeerIBU, Validators.required],
      abv: [customBeerABV, Validators.required],
      style: [customBeerStyle, Validators.required],
      description: [customBeerDescription, Validators.required],
      imageUrl: [customBeerImageUrl, Validators.required],
    });
    this.customBeerService.getCustomBeerById(+customBeerId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.customBeerService.updateCustomBeer(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['beer']);
        },
        error => {
          alert(error);
        });
  }

}
