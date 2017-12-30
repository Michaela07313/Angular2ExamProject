import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../../../core/models/view-models/project.view.model';
import { UserModel } from '../../../core/models/input-models/user.model';
import { ProjectsService } from '../../../core/services/projects/projects.service';
import { Route } from '@angular/router/src/config';


@Component({
  templateUrl: './project-comments.component.html'
})

export class ProjectCommentsComponent implements OnInit {
  public project : Project;
  public errorMessage :string;
  public id: string;
  public newComment : string;
  public addCommentFail: boolean;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private projectsService : ProjectsService
  ) { 
    this.project = new Project("", 0, "", "", "");
    this.newComment = "";
  }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.projectsService
    .getAllComments(this.id)
    .subscribe(data => {
      console.log(data)
      this.project = data.project;
    },
      err => {
        console.log(err);
      });
    }
   
      addComment () : void {
      let projectToUpdate = {
        content: this.newComment,
        commentAuthor: localStorage.getItem('_id')
      }

       this.projectsService
       .addComment(projectToUpdate, this.id)
         .subscribe(
           data => {
             console.log(data);
             this.successfullAddCommentRequest(data);
           },
           err => {
             this.addCommentFail = false;
             this.errorMessage = 'Unknown error occured. Please try again';
           }
         )
     }
   
     successfullAddCommentRequest(data) : void {
       this.addCommentFail = true;
       this.router.navigateByUrl(`/projects/details/${this.id}`);
     }

     clearComment() : void {
       this.newComment = null;
     }
}