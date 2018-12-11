import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { CommentService } from "../../service/comments.service";
import { Comment } from "../../model/comment.model";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private commentService: CommentService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      body: ['', Validators.required],
      created_at: [],
      created_by: ['Mack']
    });

  }

  onSubmit() {
    this.commentService.createComment(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['comments']);
      });
  }

}
