import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Project } from '../../../core/models/view-models/project.view.model';
import { ProjectsService } from '../../../core/services/projects/projects.service';
import { ToastrService } from '../../../core/services/toastr/toastr.service';

@Component({
  templateUrl: './project-details.component.html'
})

export class ProjectDetailsComponent implements OnInit {
  public project : Project;

  constructor(
    private route : ActivatedRoute,
    private projectsService : ProjectsService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    let id : string = this.route.snapshot.params["id"];
    this.projectsService
    .getById(id)
    .subscribe(data => {
      console.log(data);
        this.project = data;
    },
      err => {
        console.log(err);
        this.toastr.errorToast((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      });
    
    //this.project = this.projectsService.getById(id);
  }
}