import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../../core/services/projects/projects.service';
import { Route } from '@angular/router/src/config';


@Component({
  templateUrl: './comment-edit.component.html'
})

export class CommentEditComponent implements OnInit {
  public errorMessage :string;
  public projectId: string;
  public commentId: string;
  public currentComment: string;
  public newComment : string;
  public updateCommentFail: boolean;


  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private projectsService : ProjectsService
  ) { 
    this.newComment = "";
    this.currentComment = "";
    this.updateCommentFail = true;
  }

  ngOnInit() {
   this.projectId = this.route.snapshot.params["projectId"];
   this.commentId = this.route.snapshot.params["commentId"];
   this.projectsService
   .editCommentGet(this.projectId, this.commentId)
   .subscribe(data => {
     this.currentComment = data.commentData[0].comments[0];
   },
     err => {
       console.log(err);
     });
  }

  editComment() {
    let commentToUpdate = {
      content: this.newComment,
      commentAuthor: localStorage.getItem('_id')
    }

     this.projectsService
     .editComment(commentToUpdate, this.projectId, this.commentId)
       .subscribe(
         data => {
           console.log(data);
           this.successfullUpdatedCommentRequest(data);
         },
         err => {
           this.updateCommentFail = false;
           this.errorMessage = 'Unknown error occured. Please try again';
         }
       )
  }

  successfullUpdatedCommentRequest(data) : void {
    this.updateCommentFail = true;
    this.router.navigateByUrl(`/projects/comments/${this.projectId}`);
  }

  deleteComment() {
    console.log(this.projectId)
    console.log(this.commentId)
    this.projectsService.deleteComment(this.projectId, this.commentId)
    .subscribe(
      data => {
        console.log(data);
        this.successfullyDeletedCommentRequest();
      },
      err => {
        console.log(err);
      }
    )
  }

  successfullyDeletedCommentRequest() : void {
    console.log('successfully deleted');
    this.router.navigateByUrl(`/projects/comments/${this.projectId}`);
  }
}

