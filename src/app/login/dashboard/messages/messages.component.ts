import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../service/chat.service';
import { AuthenticationService } from '../../../service/auth.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messageList: any

  constructor(private messages: ChatService, public auth: AuthenticationService) {

  }

  ngOnInit() {
    // this.messages.getAllMessages()
  }

}
