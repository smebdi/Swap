import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../service/chat.service';
import { AuthenticationService } from '../../../service/auth.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  unreadMessages: any
  readMessages: any
  uid: any

  constructor(private messages: ChatService, public auth: AuthenticationService) {
    this.uid = (this.auth.uid) ? this.auth.uid : this.getUserIdFromLocal()
  }

  ngOnInit() {
    this.getUserIdFromLocal()
    this.messages.getAllMessages(this.uid).subscribe(data => {
      let messageList = data.map((v) => {
        let id = Object.keys(v)[0]
        v[id].id = id
        return v[id]
      })
      this.unreadMessages = messageList.filter((v) => {
        return (v.read == 0) ? true : false
      })
      this.readMessages = messageList.filter((v) => {
        return (v.read != 0) ? true : false
      })
    })
  }

  // shouldn't have to call this because uid is set when initializing dashboard
  getUserIdFromLocal() {
    let user = JSON.parse(localStorage.getItem("user"))
    return user ? (user.uid ? user.uid : null) : null
  }

  readMessage(message) {
    this.messages.markMessageAsRead(this.uid, message.id).subscribe(data => {
      console.log(data)
    })
  }

  deleteUnreadMessage(message) {
    this.unreadMessages = this.unreadMessages.filter((v) => {
      return !(v.id == message.id)
    })
    this.deleteMessage(message)
  }

  deleteReadMessage(message) {
    this.readMessages = this.readMessages.filter((v) => {
      return !(v.id == message.id)
    })
    this.deleteMessage(message)
  }

  deleteMessage(message) {
    this.messages.deleteMessage(this.uid, message.id).subscribe(data => {
      console.log(data)
    })
  }

}
