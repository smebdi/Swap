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
    this.route.params.subscribe(params => {
      var user = JSON.parse(localStorage.getItem("user"))
      if (user) { 
        if (user.uid) this.getData(user.uid) 
        else this.getData()
      } else this.getData()
    })
  }

  getData(uid?: string) {
    if (uid) {
      this.getUserWants(uid);
      this.getUserHas(uid);
      this.getUserCanGets(uid);
      this.getUserLikes(uid);
    } else {
      this.getUserWants();
      this.getUserHas();
      this.getUserCanGets();
      this.getUserLikes();
    }
  }

  getUserWants(uid?: string) {
    const wantData = (uid) ? this.haveitwantit.getWants(uid) : this.haveitwantit.getWants()
    if (wantData) wantData.subscribe(data => {
      if (data) {
        this.want = Object.keys(data).map(function(wantitem) {
          if (data[wantitem]) return data[wantitem]
        })
      }
    })
  }

  getUserHas(uid?: string) {
    const hasData = (uid) ? this.haveitwantit.getHas(uid) : this.haveitwantit.getHas()
    if (hasData) hasData.subscribe(data => {
      if (data) {
        this.has = Object.keys(data).map(function(item) {
          if (data[item]) return data[item]
        })
      }
    })
  }

  getUserCanGets(uid?: string) {
    const canGetData = (uid) ? this.haveitwantit.getCanGets(uid) : this.haveitwantit.getCanGets()
    if (canGetData) canGetData.subscribe(data => {
      if (data) {
        this.canget = Object.keys(data).map(function(item) {
          if (data[item]) return data[item]
        })
      }
    })
  }

  getUserLikes(uid?: string) {
    const likesData = (uid) ? this.haveitwantit.getLikes(uid) : this.haveitwantit.getLikes()
    if (likesData) likesData.subscribe(data => {
      if (data) {
        this.likes = Object.keys(data).map(function(item) {
          if (data[item]) return data[item]
        })
        console.log(this.likes)
      }
    })
  }

}