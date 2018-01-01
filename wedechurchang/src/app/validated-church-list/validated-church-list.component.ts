import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ChurchsListService} from "../services/churchs-list.service";
import {Churchs} from "../chuches-list/ChurchMapper";

@Component({
  selector: 'app-validated-church-list',
  templateUrl: './validated-church-list.component.html',
  styleUrls: ['./validated-church-list.component.css']
})
export class ValidatedChurchListComponent implements OnInit {
  public church: Churchs[];

  constructor(private churchsService: ChurchsListService, private router: Router) {
  }

  ngOnInit() {
    this.churchsService.getChurch();
    this.churchsService.ChurchEmmiter.subscribe(
      data => {
        this.church = data
      }
    );
   // this.UpdatePage();
  }

  public signout() {
    localStorage.removeItem('wedechurchTok');
    this.router.navigate(['signin']);
  }

}
