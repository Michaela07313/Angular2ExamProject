import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../core/services/projects/projects.service';
import { ToastrService } from '../../../core/services/toastr/toastr.service';
import { Project } from '../../../core/models/view-models/project.view.model';

@Component({
  templateUrl: './projects.list.component.html'
})

export class ProjectsListComponent implements OnInit {
  public projects : Project[];
  
  constructor(
    private projectsService : ProjectsService,
    private toastr: ToastrService
  ) { }


  ngOnInit() {
    this.projectsService
    .getAll()
    .subscribe(data => {
      console.log(data);
        this.projects = data.projects.sort((a,b) => a.date <= b.date);
    },
      err => {
        this.projects = [];
        console.log(err);
        this.toastr.errorToast((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
      });
  }
}