import { Component, OnInit } from '@angular/core';
import {ChurchsListService} from "../services/churchs-list.service";
import {Router} from '@angular/router';
import {Churchs} from "./ChurchMapper";


@Component({
  selector: 'app-chuches-list',
  templateUrl: './chuches-list.component.html',
  styleUrls: ['./chuches-list.component.css']
})
export class ChuchesListComponent implements OnInit {

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
    this.UpdatePage();
  }

  public signout() {
    localStorage.removeItem('wedechurchTok');
    this.router.navigate(['signin']);
  }

  public onDelete(del_church: Churchs) {
    this.churchsService.deleteChurch(del_church.id)
      .subscribe(
        () => { this.UpdatePage() }
      );
  }

  public onValidate(val_church: Churchs) {
    this.churchsService.validateChurch(val_church.id)
      .subscribe(
        () => { this.UpdatePage() }
      );
  }

  public UpdatePage(){
    this.churchsService.getChurch();
  }
}

