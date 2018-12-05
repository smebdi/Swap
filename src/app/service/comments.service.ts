import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Comment } from "../model/comment.model";
import { of, Observable } from 'rxjs';

@Injectable()
export class CommentService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://127.0.0.1:8000/api/comments/';

  getComments() {
    let fakeComments = 
    [ 
      {
        body: "This is certainly noteworthy",
        created_at: "2018-12-03T18:44:55.506525",
        created_by: "Caleb",
        id: 1,
        resource_uri: "/api/comment/1/",
        title: "First Comment"
      },
      {
        body: "This is also noteworthy",
        created_at: "2018-12-03T18:46:26.746327",
        created_by: "Caleb",
        id: 2,
        resource_uri: "/api/comment/2/",
        title: "Second Comment"
      }
    ]
    // return of(fakeComments);
    return this.http.get<Comment[]>(this.baseUrl);
  }

  getCommentResponse(): Observable<HttpResponse<Comment>> {
    return this.http.get<Comment>(
      this.baseUrl, { observe: 'response' });
  }

  getCommentById(id: number) {
    return this.http.get<Comment>(this.baseUrl + '/' + id);
  }

  createComment(user: Comment) {
    return this.http.post(this.baseUrl, user);
  }

  updateComment(user: Comment) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteComment(id: Comment) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
