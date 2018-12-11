import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Comment } from "../model/comment.model";
import { of, Observable } from 'rxjs';

@Injectable()
export class CommentService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://127.0.0.1:8000/api/comments/';

  getComments() {
    return this.http.get<Comment[]>(this.baseUrl);
  }

  getCommentResponse(): Observable<HttpResponse<Comment>> {
    return this.http.get<Comment>(
      this.baseUrl, { observe: 'response' });
  }

  getCommentById(id: number) {
    return this.http.get<Comment>(this.baseUrl + '/' + id);
  }

  createComment(comment: Comment) {
    return this.http.post(this.baseUrl, comment);
  }

  updateComment(comment: Comment) {
    console.log(comment)
    return this.http.put(this.baseUrl + comment.id, comment);
  }

  deleteComment(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
