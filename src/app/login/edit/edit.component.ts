import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthenticationService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  images: any[];
  clickedObject: any;
  user: any;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.user = JSON.parse(localStorage.getItem("user"))
  }

  ngOnInit() {
    this.images = [];
    this.images.push([1,  `${environment.localUrl}/assets/icons/1.png` ])
    this.images.push([2,  `${environment.localUrl}/assets/icons/2.jpg` ])
    this.images.push([3,  `${environment.localUrl}/assets/icons/3.jpg` ])
    this.images.push([4,  `${environment.localUrl}/assets/icons/4.jpg` ])
    this.images.push([5,  `${environment.localUrl}/assets/icons/5.jpg` ])
    this.images.push([6,  `${environment.localUrl}/assets/icons/6.jpg` ])
    this.images.push([7,  `${environment.localUrl}/assets/icons/7.jpg` ])
    this.images.push([8,  `${environment.localUrl}/assets/icons/8.jpg` ])
    this.images.push([9,  `${environment.localUrl}/assets/icons/9.jpg` ])
    this.images.push([10, `${environment.localUrl}/assets/icons/10.jpg`])
    this.images.push([11, `${environment.localUrl}/assets/icons/11.jpg`])
    this.images.push([12, `${environment.localUrl}/assets/icons/12.jpg`])
    this.images.push([13, `${environment.localUrl}/assets/icons/13.jpg`])
    this.images.push([14, `${environment.localUrl}/assets/icons/14.jpg`])
    this.images.push([15, `${environment.localUrl}/assets/icons/15.jpg`])
    this.images.push([16, `${environment.localUrl}/assets/icons/16.jpg`])
    this.images.push([17, `${environment.localUrl}/assets/icons/17.jpg`])
    this.images.push([18, `${environment.localUrl}/assets/icons/18.jpg`])
    this.images.push([19, `${environment.localUrl}/assets/icons/19.jpg`])
    this.images.push([20, `${environment.localUrl}/assets/icons/20.jpg`])
    this.images.push([21, `${environment.localUrl}/assets/icons/21.jpg`])
    this.images.push([22, `${environment.localUrl}/assets/icons/22.jpg`])
    this.images.push([23, `${environment.localUrl}/assets/icons/23.jpg`])
    this.images.push([24, `${environment.localUrl}/assets/icons/24.jpg`])
    this.images.push([25, `${environment.localUrl}/assets/icons/25.jpg`])
    this.images.push([26, `${environment.localUrl}/assets/icons/26.jpg`])
    this.images.push([27, `${environment.localUrl}/assets/icons/27.jpg`])
    this.images.push([28, `${environment.localUrl}/assets/icons/28.jpg`])
    this.images.push([29, `${environment.localUrl}/assets/icons/29.jpg`])
    this.images.push([30, `${environment.localUrl}/assets/icons/30.jpg`])
    this.images.push([31, `${environment.localUrl}/assets/icons/31.jpg`])
    this.images.push([32, `${environment.localUrl}/assets/icons/32.jpg`])
    this.images.push([33, `${environment.localUrl}/assets/icons/33.jpg`])
    this.images.push([34, `${environment.localUrl}/assets/icons/34.jpg`])
    this.images.push([35, `${environment.localUrl}/assets/icons/35.jpg`])
    this.images.push([36, `${environment.localUrl}/assets/icons/36.jpg`])
    this.images.push([37, `${environment.localUrl}/assets/icons/37.jpg`])
    this.images.push([38, `${environment.localUrl}/assets/icons/38.jpg`])
    this.images.push([39, `${environment.localUrl}/assets/icons/39.jpg`])
    this.images.push([40, `${environment.localUrl}/assets/icons/40.jpg`])
    this.images.push([41, `${environment.localUrl}/assets/icons/41.jpg`])
    this.images.push([42, `${environment.localUrl}/assets/icons/42.jpg`])
    this.images.push([43, `${environment.localUrl}/assets/icons/43.jpg`])
    this.images.push([44, `${environment.localUrl}/assets/icons/44.jpg`])
    this.images.push([45, `${environment.localUrl}/assets/icons/45.jpg`])
    this.images.push([46, `${environment.localUrl}/assets/icons/46.jpg`])
    this.images.push([47, `${environment.localUrl}/assets/icons/47.jpg`])
    this.images.push([48, `${environment.localUrl}/assets/icons/48.jpg`])
    this.images.push([49, `${environment.localUrl}/assets/icons/49.jpg`])
    this.images.push([50, `${environment.localUrl}/assets/icons/50.jpg`])
    this.images.push([51, `${environment.localUrl}/assets/icons/51.jpg`])
    this.images.push([52, `${environment.localUrl}/assets/icons/52.jpg`])
  }

  onclick(id) {
    // remove all instances of active class
    var active = document.getElementsByClassName('active')
    for (var x=0; x<active.length; x++) {
      active[x].className = active[x].className.replace('active', '');
    }

    // add active to target parent element
    document.getElementById(id).parentElement.className += " active"
  }

  onSave() {
    let id = document.getElementsByClassName('active')[0].firstElementChild.id
    this.authService.setUserImage(this.authService.username, `${environment.localUrl}/assets/icons/${id}.jpg`)
  }

  onCancel() {
    this.router.navigate(['dashboard'])
  }

}
