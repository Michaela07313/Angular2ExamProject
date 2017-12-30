import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../../../core/models/view-models/project.view.model';
import { UserModel } from '../../../core/models/input-models/user.model';
import { ProjectsService } from '../../../core/services/projects/projects.service';
import { Route } from '@angular/router/src/config';


@Component({
  templateUrl: './project-delete.component.html'
})

export class ProjectDeleteComponent implements OnInit {
  public project : Project;
  public errorMessage :string;
  public id: string;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private projectsService : ProjectsService
  ) {
    
    this.project = new Project("", 0, "", "","");
   }

  ngOnInit() {
   this.id = this.route.snapshot.params["id"];
   this.projectsService
   .getById(this.id)
   .subscribe(data => {
     this.project = data.project;
   },
     err => {
       console.log(err);
     });
  }

  deleteProject () : void {
    this.projectsService.delete(this.id)
      .subscribe(
        data => {
          if(data.success == true) {
            this.successfullDelteRequest(data);
          } else {
            this.errorMessage = data.errorMessage;
          }
        },
        err => {
          this.errorMessage = 'Unknown error occured. Please try again';
        }
      )
  }

  successfullDelteRequest(data) : void {
    this.router.navigate(['/projects']);
  }


}