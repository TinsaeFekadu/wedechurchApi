import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Users} from "../users-list/UserMapper";
import {UsersListService} from "../services/users-list.service";

@Component({
  selector: 'app-validated-users',
  templateUrl: './validated-users.component.html',
  styleUrls: ['./validated-users.component.css']
})
export class ValidatedUsersComponent implements OnInit {

  public user: Users[];


  constructor(private usersService: UsersListService, private router: Router ) { }

  ngOnInit() {

    this.usersService.getUsers();
    this.usersService.UserEmmiter.subscribe(
      data => {
        this.user = data
      }
    );
   // this.UpdatePage();
  }
  public signout(){
    localStorage.removeItem('wedechurchTok');
    this.router.navigate(['signin']);
  }


}
