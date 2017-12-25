import { Component, OnInit } from '@angular/core';
//import {UsersService} from '../service/users.service';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  public signout() {
    localStorage.removeItem('wedechurchTok');
    this.router.navigate(['signin']);
  }


}

