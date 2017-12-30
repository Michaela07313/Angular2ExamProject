import { Injectable } from "@angular/core";
import { LoginInputModel } from "../../models/input-models/login.input.model";
import { HttpClientService } from "../http-client.service";
import { HttpHeaders} from '@angular/common/http';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';

const baseUrl : string = 'http://localhost:7313/';

@Injectable()
export class AuthService {
  public redirectUrl : string;
  private currentAuthtoken : string;

  constructor(
    private httpService : HttpClientService,
    private router : Router
  ) { }


  login(body):Observable<any> {
    const data = {email: body.email, password: body.password};
    let httpUrl:string = `${baseUrl}users/login`;
    this.redirectUrl = '/home';
    return this.httpService.post(httpUrl, data);
  }

  register(registerModel){
    let httpUrl:string = `${baseUrl}users/register`;
    this.redirectUrl = '/login';
    return this.httpService.post(httpUrl, registerModel);
  }

  isLoggedIn() : boolean {
    let authtoken : string = localStorage.getItem('authtoken');
    return authtoken === this.currentAuthtoken;
  }

  get authtoken() {
    return this.currentAuthtoken;
  }

  set authtoken(value : string) {
    this.currentAuthtoken = value;
  }

  tryNavigate() {
    console.log('redirect: ' + this.redirectUrl)
    if (this.redirectUrl) {
      this.router.navigate([this.redirectUrl]);
    } else {
      this.router.navigate([""]);
    }
  }
}