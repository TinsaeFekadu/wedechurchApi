import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-validated-church-list',
  templateUrl: './validated-church-list.component.html',
  styleUrls: ['./validated-church-list.component.css']
})
export class ValidatedChurchListComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  public signout() {
    localStorage.removeItem('wedechurchTok');
    this.router.navigate(['signin']);
  }


}
