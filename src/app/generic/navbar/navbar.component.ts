import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RateBeerService } from '../../service/ratebeer.service';
import { RateBeer } from '../../model/ratebeer.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private rateBeerService: RateBeerService) { }

  navSearchForm: FormGroup;
  @Output() messageEvent = new EventEmitter<[RateBeer]>();

  ngOnInit() {
    const searchterm = '';
    this.navSearchForm = this.formBuilder.group({
      searchterm
    });
  }

  onSubmit() {
    if (this.navSearchForm.value.searchterm) {
      this.router.navigate([`search/${this.navSearchForm.value.searchterm}/1`]);
      this.navSearchForm.reset();
    }
  }
}
