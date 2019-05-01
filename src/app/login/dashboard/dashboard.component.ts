import { Component, OnInit, NgZone } from '@angular/core';
import { AuthenticationService } from "../../service/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { HaveItWantIt } from '../../service/haveitwantit.service';

import { MatDialog, MatDialogConfig } from "@angular/material";
import { SendmessageComponent } from './sendmessage/sendmessage.component';
import { ChatService } from '../../service/chat.service';

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

  user: any;

  showProfile: boolean;
  showMessages: boolean;
  showTrading: boolean;

  showWantRow: boolean;
  showHasRow: boolean;
  showCanGetRow: boolean;
  showLikeRow: boolean;
  username: string;
  publicUserName: string;
  publicUserImageUrl: string;
  publicUserDescription: string;
  imageUrl: string;
  userid: string;
  description: string;

  showDesc: boolean;
  editDesc: boolean;

  isPublic: boolean;

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private route: ActivatedRoute,
    public ngZone: NgZone,
    public haveitwantit: HaveItWantIt,
    private dialog: MatDialog,
    private chatService: ChatService
  ) {
    this.user = JSON.parse(localStorage.getItem("user"))
  }

  ngOnInit() {

    this.showProfile = true;
    this.showMessages = false;
    this.showTrading = false;

    this.route.params.subscribe(params => {
      if (params.username) {
        this.isPublic = true;
        this.getPublicUser(params)
        this.authService.setPublicUserId(params.username)
      } else {
        var user = this.getUserFromLocal()
        if (user && user.uid) { 
          this.getData(user.uid)
          this.authService.setUserId(user.uid)
        }
        else this.getData()
      }
    })

  }

  getUserFromLocal() {
    return JSON.parse(localStorage.getItem("user"))
  }

  cleanData() {
    this.has = [];
    this.want = [];
    this.canget = [];
    this.likes = [];
  }

  toggleMessages() { (!this.showMessages) ? this.showMessages = true : this.showMessages = false }
  toggleWantRow() { (!this.showWantRow) ? this.showWantRow = true : this.showWantRow = false }
  toggleHasRow() { (!this.showHasRow) ? this.showHasRow = true : this.showHasRow = false }
  toggleCanGetRow() { (!this.showCanGetRow) ? this.showCanGetRow = true : this.showCanGetRow = false }
  toggleLikeRow() { (!this.showLikeRow) ? this.showLikeRow = true : this.showLikeRow = false }
  toggleEditDescription() { this.editDesc = !this.editDesc; }

  toggleView(passedView) {
    this.showTrading = false
    this.showMessages = false
    this.showProfile = false

    if (passedView == "showProfile") this.showProfile = true
    if (passedView == "showMessages") this.showMessages = true
    if (passedView == "showTrading") this.showTrading = true
  }

  getData(uid?: string) {
    this.cleanData();
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

  async getDataAsync(uid?: string) {
    this.cleanData();
    if (uid) {
      this.getUserWants(uid); 
      this.getUserHas(uid); 
      this.getUserCanGets(uid); 
      this.getUserLikes(uid);
    }
  }

  getUserData(uid?: string) {
    console.log('getting user data')
    if (uid) {
      this.authService.getUserData(uid).subscribe(data => {
        if (data) {
          this.getUserDataFromUsername(data.username)
        }
        if (this.authService.userData && this.authService.userData.displayName) {
          this.username = this.authService.userData.displayName
        }
      })
    }
  }
  
  async getPublicUser(params: any) {
    // async wrapper
    await this.getPublicUserDataFromUsername(params.username)
  }

  async getPublicUserDataFromUsername(username?: string) {
    if (username) {
      this.authService.getUserDataFromUsername(username).subscribe(data => {
        if (data) {
          this.publicUserName = data.username
          this.publicUserImageUrl = data.imageUrl
          if (data.description) {
            this.publicUserDescription = data.description; 
            this.showDesc = true;
          }
          this.getDataAsync(data.uid)
        }

        // just sets service username variable
        this.authService.setPublicUsername(data.username);
      })
    }
  }

  async getUserDataFromUsername(username?: string) {
    if (username) {
      this.authService.getUserDataFromUsername(username).subscribe(data => {
        if (data) {
          this.username = data.username
          this.imageUrl = data.imageUrl
          if (data.description) {
            this.description = data.description; 
            this.showDesc = true;
          }
          this.getDataAsync(data.uid)
        }

        // just sets service username variable
        this.authService.setUsername(data.username);
      })
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SendmessageComponent, {
      width: '640px',
      maxWidth: '90%',
      data: {
        recipient: (this.authService.publicUser) ? this.authService.publicUser : this.username,
        sender: this.authService.username,
        subject: '',
        message: ''
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.message) {
        this.chatService.sendMessage(result.message, result.subject, result.recipient, result.sender, this.authService.publicUid)
      }
    });
  }

  getUserWants(uid?: string) {
    const wantData = (uid) ? this.haveitwantit.getWants(uid) : this.haveitwantit.getWants()
    if (wantData) wantData.subscribe(data => {
      if (data) {
        this.want = Object.keys(data).map(function(wantitem) {
          if (data[wantitem]) return data[wantitem]
        });
        (this.want.length > 8) ? this.showWantRow = false : this.showWantRow = true
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
        (this.has.length > 8) ? this.showHasRow = false : this.showHasRow = true
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
        (this.canget.length > 8) ? this.showCanGetRow = false : this.showCanGetRow = true
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
        (this.likes.length > 8) ? this.showLikeRow = false : this.showLikeRow = true
      }
    })
  }

  async saveDesc(desc?: string) {
    if (desc) { 
      this.description = desc
      await this.authService.putUserDescription(this.user.uid, desc)
    }
    this.toggleEditDescription()
  }

  goToDetail(id: number) {
    try { this.router.navigate([`/detail/${id}`]) } 
    catch (e) { console.log(e) }
  }

  goToBrewDetail() {
    try { console.log('test2') } 
    catch (e) { console.log(e) }
  }

  goToEdit() {
    try { this.router.navigate([`/edit`]) } 
    catch (e) { console.log(e) }
  }

}