import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  public user : string;

  constructor(
    private router : Router
  ) { 
    this.user = localStorage.getItem('name');
  }

  ngOnInit() { }

  logout() {
    console.log('tuk')
    localStorage.clear();
    this.router.navigate(['/'])
  }
}