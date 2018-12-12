import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { CustomBreweryService } from "../../service/custom-brewery.service";
import { CustomBrewery } from "../../model/custom-brewery.model";

@Component({
  selector: 'app-edit-custom-brewery',
  templateUrl: './edit-custom-brewery.component.html',
  styleUrls: ['./edit-custom-brewery.component.css']
})
export class EditCustomBreweryComponent implements OnInit {

  customBrewery: CustomBrewery;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private customBreweryService: CustomBreweryService) { }

  ngOnInit() {
    console.log(this)
    let customBreweryId = localStorage.getItem("editCustomBreweryId");
    let customBreweryName = localStorage.getItem("editCustomBreweryName");
    let customBreweryLocation = localStorage.getItem("editCustomBreweryLocation");
    let customBreweryWebsite = localStorage.getItem("editCustomBreweryWebsite");
    let customBreweryImageUrl = localStorage.getItem("editCustomBreweryImageUrl");


    if(!customBreweryId) {
      alert("Invalid action.")
      this.router.navigate(['brewery']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [customBreweryId],
      name: [customBreweryName, Validators.required],
      location: [customBreweryLocation, Validators.required],
      website: [customBreweryWebsite, Validators.required],
      imageUrl: [customBreweryImageUrl, Validators.required],
    });
    this.customBreweryService.getCustomBreweryById(+customBreweryId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.customBreweryService.updateCustomBrewery(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['brewery']);
        },
        error => {
          alert(error);
        });
  }

}
