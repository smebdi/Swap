import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CommentService } from "../service/comments.service";
import { Comment } from "../model/comment.model";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private router: Router, private commentService: CommentService) { }

  comments: Comment[];

  ngOnInit() {
    this.commentService.getComments()
      .subscribe( data => {
        this.comments = data;
      });
  }

  // ngOnInit() {
  //   this.commentService.getCommentResponse()
  //     .subscribe( data => {
  //       this.comments = data;
  //     });
  // }

  // showConfigResponse() {
  //   this.commentService.getCommentResponse()
  //     // resp is of type `HttpResponse<Config>`
  //     .subscribe(resp => {
  //       // access the body directly, which is typed as `Config`.
  //       this.comment = { ... resp.body };
  //     });
  // }

}
