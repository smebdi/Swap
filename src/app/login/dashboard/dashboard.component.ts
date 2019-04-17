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

  showWantRow: boolean;
  showHasRow: boolean;
  showCanGetRow: boolean;
  showLikeRow: boolean;
  username: string;
  isPublic: boolean;

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private route: ActivatedRoute,
    public ngZone: NgZone,
    public haveitwantit: HaveItWantIt
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.username) {
        console.log(params.username)
        this.isPublic = true;
        this.getUserDataFromUsername(params.username)
      } else {
        console.log('no params detected')
        var user = JSON.parse(localStorage.getItem("user"))
        if (user && user.uid) this.getData(user.uid) 
        else this.getData()
      }
    })
  }

  toggleWantRow() { (!this.showWantRow) ? this.showWantRow = true : this.showWantRow = false }
  toggleHasRow() { (!this.showHasRow) ? this.showHasRow = true : this.showHasRow = false }
  toggleCanGetRow() { (!this.showCanGetRow) ? this.showCanGetRow = true : this.showCanGetRow = false }
  toggleLikeRow() { (!this.showLikeRow) ? this.showLikeRow = true : this.showLikeRow = false }

  getData(uid?: string) {
    if (uid) {
      this.getUserWants(uid); 
      this.getUserHas(uid); 
      this.getUserCanGets(uid); 
      this.getUserLikes(uid);
      this.getUserData(uid)
    } else {
      this.getUserWants(); 
      this.getUserHas(); 
      this.getUserCanGets(); 
      this.getUserLikes();
      this.getUserData()
    }
  }

  getUserData(uid?: string) {
    console.log('getting user data')
    if (uid) {
      this.authService.getUserData(uid).subscribe(data => {
        if (data) {
          console.log('data exists')
          this.username = data.username
        }
        if (this.authService.userData && this.authService.userData.displayName) {
          console.log('userData exists')
          this.username = this.authService.userData.displayName
        }
      })
    }
  }

  getUserDataFromUsername(username?: string) {
    if (username) {
      console.log(`getting user data with username`)
      this.authService.getUserDataFromUsername(username).subscribe(data => {
        this.username = data
      })
    }
  }

  getUserWants(uid?: string) {
    const wantData = (uid) ? this.haveitwantit.getWants(uid) : this.haveitwantit.getWants()
    if (wantData) wantData.subscribe(data => {
      if (data) {
        this.want = Object.keys(data).map(function(wantitem) {
          if (data[wantitem]) return data[wantitem]
        });
        (this.want.length > 4) ? this.showWantRow = false : this.showWantRow = true
      }
    })
  }

  getUserHas(uid?: string) {
    const hasData = (uid) ? this.haveitwantit.getHas(uid) : this.haveitwantit.getHas()
    if (hasData) hasData.subscribe(data => {
      if (data) {
        this.has = Object.keys(data).map(function(item) {
          if (data[item]) return data[item]
        });
        (this.has.length > 4) ? this.showHasRow = false : this.showHasRow = true
      }
    })
  }

  getUserCanGets(uid?: string) {
    const canGetData = (uid) ? this.haveitwantit.getCanGets(uid) : this.haveitwantit.getCanGets()
    if (canGetData) canGetData.subscribe(data => {
      if (data) {
        this.canget = Object.keys(data).map(function(item) {
          if (data[item]) return data[item]
        });
        (this.canget.length > 4) ? this.showCanGetRow = false : this.showCanGetRow = true
      }
    })
  }

  getUserLikes(uid?: string) {
    const likesData = (uid) ? this.haveitwantit.getLikes(uid) : this.haveitwantit.getLikes()
    if (likesData) likesData.subscribe(data => {
      if (data) {
        this.likes = Object.keys(data).map(function(item) {
          if (data[item]) return data[item]
        });
        (this.likes.length > 4) ? this.showLikeRow = false : this.showLikeRow = true
      }
    })
  }

}