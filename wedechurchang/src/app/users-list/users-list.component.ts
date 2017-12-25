import { Component, OnInit } from '@angular/core';
//import {Response} from "@angular/Http";
import { UsersListService} from "../services/users-list.service";
import {Router} from '@angular/router';
import {Users} from "./UserMapper";
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

 public user: Users[];


  constructor(private usersService: UsersListService, private router: Router, private auth: AuthService ) { }

  ngOnInit() {

      this.usersService.getUsers();
      this.usersService.UserEmmiter.subscribe(
        data => {
          this.user = data
        }
      );
  }
  public signout(){
      localStorage.removeItem('wedechurchTok');
      this.router.navigate(['signin']);
    }

   public onDelete(del_user: Users) {
    this.usersService.deleteUsers(del_user.id)
      .subscribe(
      () => console.log('User Deleted')
    );
    }

}

