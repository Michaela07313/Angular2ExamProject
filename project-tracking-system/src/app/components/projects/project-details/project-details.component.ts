import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Project } from '../../../core/models/view-models/project.view.model';
import { ProjectsService } from '../../../core/services/projects/projects.service';

@Component({
  templateUrl: './project-details.component.html'
})

export class ProjectDetailsComponent implements OnInit {
  public project : Project;
  public isCreator: boolean;
  public isWorker: boolean;

  constructor(
    private route : ActivatedRoute,
    private projectsService : ProjectsService
  ) { }

  async ngOnInit() {
    let id : string = this.route.snapshot.params["id"];
    const getProjectDetails = await this.projectsService
    .getById(id)
    .subscribe(data => {
      if(data.project.creator.email === localStorage.getItem('email')) {
        this.isCreator = true;
      }
      if(data.project.worker.email === localStorage.getItem('email')){
        this.isWorker = true;
      }
      this.project = data.project;
    },
    err => {
      console.log(err);
      this.isCreator = false;
      this.isWorker = false;
    });

    return getProjectDetails;
  }
}