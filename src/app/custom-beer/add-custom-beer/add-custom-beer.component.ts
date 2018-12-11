import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { CustomBeer } from "../../model/custom-beer.model";
import { CustomBeerService } from '../../service/custom-beer.service';

@Component({
  selector: 'app-add-custom-beer',
  templateUrl: './add-custom-beer.component.html',
  styleUrls: ['./add-custom-beer.component.css']
})
export class AddCustomBeerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private customBeerService: CustomBeerService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      name: [Validators.required],
      brewery: [Validators.required],
      ibu: [Validators.required],
      abv: [Validators.required],
      style: [Validators.required],
      description: [Validators.required],
      imageUrl: [Validators.required],
    });

  }

  onSubmit() {
    this.customBeerService.createCustomBeer(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['beer']);
      });
  }

}
