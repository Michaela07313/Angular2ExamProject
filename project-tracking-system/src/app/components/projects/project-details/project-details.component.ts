import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Project } from '../../../core/models/view-models/project.view.model';
import { ProjectsService } from '../../../core/services/projects/projects.service';

@Component({
  templateUrl: './project-details.component.html'
})

export class ProjectDetailsComponent implements OnInit {
  public project : Project;

  constructor(
    private route : ActivatedRoute,
    private projectsService : ProjectsService
  ) { }

  ngOnInit() {
    let id : string = this.route.snapshot.params["id"];
    
    this.project = this.projectsService.getById(id);
  }
}