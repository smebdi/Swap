import { Component, OnInit, NgZone } from '@angular/core';
import { AuthenticationService } from "../../service/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { HaveItWantIt } from '../../service/haveitwantit.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  has: any[];
  want: any[];
  canget: any[];
  likes: any[];

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private route: ActivatedRoute,
    public ngZone: NgZone,
    public haveitwantit: HaveItWantIt
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.getUserWants();
      this.getUserHas();
      this.getUserCanGets();
      // this.getUserLikes();
    })
  }

  getUserWants() {
    const wantData = this.haveitwantit.getWants()
    if (wantData) wantData.subscribe(data => {
      this.want = Object.keys(data).map(function(item) {
        return data[item]
      })
    })
  }

  getUserHas() {
    const hasData = this.haveitwantit.getHas()
    if (hasData) hasData.subscribe(data => {
      this.has = Object.keys(data).map(function(item) {
        return data[item]
      })
    })
  }

  getUserCanGets() {
    const canGetData = this.haveitwantit.getCanGets()
    if (canGetData) canGetData.subscribe(data => {
      this.canget = Object.keys(data).map(function(item) {
        return data[item]
      })
    })
  }

  getUserLikes() {
    const likesData = this.haveitwantit.getLikes()
    if (likesData) likesData.subscribe(data => {
      this.likes = Object.keys(data).map(function(item) {
        return data[item]
      })
    })
  }

}