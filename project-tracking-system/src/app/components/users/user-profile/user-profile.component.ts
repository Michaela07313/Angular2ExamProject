import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from '../../../core/services/authentication/auth.service';
import { UserModel } from '../../../core/models/input-models/user.model';


@Component({
  templateUrl: './user-profile.component.html'
})

export class UserProfileComponent implements OnInit {
  public user : UserModel;
  public id : string;
  @ViewChild('fileInput') fileInput;
  
  constructor(
    private route : ActivatedRoute,
    private authService : AuthService,
    private router : Router
  ) { 
    this.id = this.route.snapshot.params["id"];
    this.user = new UserModel(
      this.id, 
      localStorage.getItem('email'), 
      "", 
      localStorage.getItem('name'),
      "",
      "",
      "");
  }

  ngOnInit() {
    this.authService
    .getUserProfile(this.id)
    .subscribe(data => {
      console.log(data);
      this.user = data.user;
    },
      err => {
        console.log(err);
      });
  }

  upload() {
    let fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append("image", fileBrowser.files[0]);
      this.authService
      .upload(formData, this.id)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl(`/projects`);
      });
    }
  }
}