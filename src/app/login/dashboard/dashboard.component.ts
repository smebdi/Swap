import { Component, OnInit, NgZone } from '@angular/core';
import { AuthenticationService } from "../../service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() {
  }

}
