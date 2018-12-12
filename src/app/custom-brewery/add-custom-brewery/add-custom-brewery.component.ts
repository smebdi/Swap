import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { CustomBrewery } from "../../model/custom-brewery.model";
import { CustomBreweryService } from '../../service/custom-brewery.service';

@Component({
  selector: 'app-add-custom-brewery',
  templateUrl: './add-custom-brewery.component.html',
  styleUrls: ['./add-custom-brewery.component.css']
})
export class AddCustomBreweryComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private customBreweryService: CustomBreweryService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      location: ['', Validators.required],
      website: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });

  }

  onSubmit() {
    this.customBreweryService.createCustomBrewery(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['brewery']);
      });
  }

}
