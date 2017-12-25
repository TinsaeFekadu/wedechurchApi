import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-validated-users',
  templateUrl: './validated-users.component.html',
  styleUrls: ['./validated-users.component.css']
})
export class ValidatedUsersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  public signout() {
    localStorage.removeItem('wedechurchTok');
    this.router.navigate(['signin']);
  }


}
