import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../core/services/projects/projects.service';
import { Project } from '../../core/models/view-models/project.view.model';

@Component({
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  public projects : Project[];

  constructor(
    private projectsService : ProjectsService) { }

    ngOnInit() {
      this.projectsService
      .getOwnProjects(localStorage.getItem('_id'))
      .subscribe(data => {
        console.log(data);
          this.projects = data.projects.sort((a,b) => a.date >= b.date);
      },
        err => {
          this.projects = [];
          console.log(err);
        });
    }
}