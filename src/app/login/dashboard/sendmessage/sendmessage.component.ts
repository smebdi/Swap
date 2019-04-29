import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Message } from '../../../model/message.model';
import { AuthenticationService } from '../../../service/auth.service';

@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.css']
})
export class SendmessageComponent {

  form: FormGroup;
  message: Message;

  constructor(
      public dialogRef: MatDialogRef<SendmessageComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Message,
      private authService: AuthenticationService
    ) {
      if (!this.data.sender) {
        let user = JSON.parse(localStorage.getItem("user"))
        this.authService.getUserData(user.uid).subscribe(data => {
          if (data) {
            this.data.sender = data.username
            this.authService.setUsername(data.username)
          }
        });
      }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
