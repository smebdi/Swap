import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/user-portal/users';

  getUsers() {
    let fakeUsers = 
    [ 
      {id: 2, firstName: 'Caleb', lastName: 'Davenport', email: 'calebmackdaven@gmail.com'},
      {id: 2, firstName: 'Min', lastName: 'Seo', email: 'mhseo2180@gmail.com'},
    ];
    return (fakeUsers);
    // return this.http.get<User[]>(this.baseUrl);
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
