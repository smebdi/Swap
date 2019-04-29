import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  getAllMessages(uid: string) {
    return this.http.get<any>(`${environment.apiUrl}/api/messages/user/${uid}/all`)
  }

  getAllMessagesCount(uid: string) {
    return this.http.get<any>(`${environment.apiUrl}/api/messages/user/${uid}/all/count`)
  }

  getUnreadMessages(uid: string) {
    return this.http.get<any>(`${environment.apiUrl}/api/messages/user/${uid}/unread`)
  }

  getUnreadMessagesCount(uid: string) {
    return this.http.get<any>(`${environment.apiUrl}/api/messages/user/${uid}/unread/count`)
  }

  sendMessage(message, subject, recipient, sender, uid) {
    console.log(uid)
    return this.http.post<any>(`${environment.apiUrl}/api/messages/user/${uid}/send`, {
      sender: sender,
      message: message,
      subject: subject,
      recipient: recipient,
    }).subscribe(data => {
      console.log(data)
      return data
    })
  }

}
