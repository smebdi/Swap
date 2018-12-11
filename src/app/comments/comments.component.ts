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

  deleteComment(comment: Comment): void {
    this.commentService.deleteComment(comment.id)
      .subscribe( data => {
        this.comments = this.comments.filter(c => c !== comment);
      })
  };

  editComment(comment: Comment): void {
    localStorage.removeItem("editCommentId");
    localStorage.setItem("editCommentId", comment.id.toString());
    localStorage.setItem("editCommentTitle", comment.title.toString());
    localStorage.setItem("editCommentBody", comment.body.toString());
    this.router.navigate(['comments/edit']);
  };

  addComment(): void {
    this.router.navigate(['add-comment']);
  };
}
