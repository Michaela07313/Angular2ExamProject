import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  public user : string;
  public userId : string;

  constructor(
    private router : Router
  ) { 
    
  }

  ngOnInit() { 
    this.user = localStorage.getItem('name');
    this.userId = localStorage.getItem('_id');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}