import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { CommentService } from "../../service/comments.service";
import { Comment } from "../../model/comment.model";

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {

  comment: Comment;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private commentService: CommentService) { }

  ngOnInit() {
    console.log(this)
    let commentId = localStorage.getItem("editCommentId");
    let commentTitle = localStorage.getItem("editCommentTitle");
    let commentBody = localStorage.getItem("editCommentBody");

    if(!commentId) {
      alert("Invalid action.")
      this.router.navigate(['list-comment']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [commentId],
      title: [commentTitle, Validators.required],
      body: [commentBody, Validators.required],
      created_at: [],
      created_by: ['Mack']
    });
    this.commentService.getCommentById(+commentId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.commentService.updateComment(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['comments']);
        },
        error => {
          alert(error);
        });
  }

}
