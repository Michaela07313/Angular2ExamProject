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

  getAll (): Observable<any> {
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Content-Type','application/json');
    let httpUrl:string = 'http://localhost:7313/';
    return this.httpService.get(httpUrl, headers);
  }

  getById(id : string) : Observable<any>{
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Content-Type','application/json');
    let httpUrl:string = `http://localhost:7313/projects/details/${id}`;
    return this.httpService.get(httpUrl, headers);
  }

  create(projectObject) : Observable<any> {
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Content-Type','application/json');
    let httpUrl:string = `http://localhost:7313/projects/create`;
    return this.httpService.post(httpUrl, projectObject, headers);
  }

  createGet() : Observable<any> {
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Content-Type','application/json');
    let httpUrl:string = `http://localhost:7313/projects/create`;
    return this.httpService.get(httpUrl, headers);
  }

  editGet(id : string) : Observable<any> {
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Content-Type','application/json');
    let httpUrl:string = `http://localhost:7313/projects/edit/${id}`;
    return this.httpService.get(httpUrl, headers);
  }

  edit(projectObject, id : string) : Observable<any> {
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Content-Type','application/json');
    let httpUrl:string = `http://localhost:7313/projects/edit/${id}`;
    return this.httpService.post(httpUrl, projectObject, headers);
  }

  delete(id : string) : Observable<any> {
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Content-Type','application/json');
    let httpUrl:string = `http://localhost:7313/projects/delete/${id}`;
    return this.httpService.post(httpUrl, id, headers);
  }
}