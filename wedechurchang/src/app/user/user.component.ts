import { Component, OnInit } from '@angular/core';
import {User} from '../user';
//import { USER } from '../mock-user';
import { UserService} from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //user=USER;

  selectedUser: User;

  user: User[];

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  /*user1='Getaneh';
  user2='Tinsu';*/

 /*user: User = {
    id: 1,
    name: 'Abebe'
  };*/

  constructor(private userService: UserService) {}

  getUser(): void{
    this.user = this.userService.getUser();
  }

  ngOnInit() {
      this.getUser();
  }

  getUser(): void {
    this.userService.getUser()
      .subscribe(user => this.user = user);
  }

}
