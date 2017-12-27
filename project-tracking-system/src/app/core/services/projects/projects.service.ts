import { Injectable } from "@angular/core";
import { Project } from "../../models/view-models/project.view.model";
import { HttpHeaders} from '@angular/common/http';
import { Router } from "@angular/router";
import { HttpClientService } from "../http-client.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProjectsService {

  constructor(
    private httpService : HttpClientService,
    private router : Router
  ) { }

  projects : Project[] = [ 
    /*new Book(1, "First Book", "First Author", 12, "Nice Description"),
    new Book(2, "Second Book", "Second Book", 60, "Very cool description"),
    new Book(3, "Third Book", "Third Author", 123, "Description")*/
  ];

  getAll (): Observable<any> {
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Content-Type','application/json');
    let httpUrl:string = 'http://localhost:7313/';
    return this.httpService.get(httpUrl, headers);
  }

  getById(id : string) : Project {
    return this.projects.find(b => b.id === id);
  }
}