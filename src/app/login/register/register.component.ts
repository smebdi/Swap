import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  validUsername: boolean;
  checked: number;

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.checked = 0
  }

  fireVerifyUsername(username: string) {
    console.log('checking username')
    this.checked += 1
    if (username.length > 5) {
      const isValid = this.authenticationService.isValidUsername(username)
      if (isValid) isValid.subscribe(data => {
        if (data == null) {
          this.validUsername = true
        }
      })
    }
  }

  verifySignUp(userName: string, userEmail: string, userPwd: string) {
    if (this.checked < 1) this.fireVerifyUsername(userName)

    if (userName.includes(userPwd) || userEmail.includes(userPwd)) {
      window.alert('\nPlease use another password. \n' +
      'Password detected within username or email address.');
      return
    }

    if (this.validUsername) {
      this.authenticationService.SignUp(userName, userEmail, userPwd)
    } else {
      window.alert('\nIt looks like that username is invalid. \n' +
      'Please try another username or contact support at support@swapthehop.com.');
    }
  }

}
