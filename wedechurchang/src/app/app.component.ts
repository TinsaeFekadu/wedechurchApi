import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {AdminPageComponent} from './admin-page';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header';
import {ChuchesListComponent} from './chuches-list/chuches-list.component';
import {ValidatedUsersComponent} from './validated-users/validated-users.component';
import {UsersListComponent} from './users-list/users-list.component';
import {ValidatedChurchListComponent} from './validated-church-list/validated-church-list.component';
import {HttpClient} from '@angular/common/http';
import {UsersService} from "./services/users.service";
//import {ChurchsListService} from './services/churchs-list.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['signin']);

  }

}

