import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {observable} from 'rxjs/symbol/observable';
import {Router, RouterModule} from '@angular/router';
//import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable()
export class AuthService {
public tok: string;
  constructor(private httpService: HttpClient, private router: Router) {
  }

  public isAuthenticated() {
    return localStorage.getItem( 'wedechurchTok');
  }

 /* public signup(username: string, email: string, password: string) {
    return this.httpService.post('http://localhost:8000/api/users', {name: username, email: email, password: password},
      {headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})
      }) ;
  }*/

  authenticate(email: string, password: string) {
    return this.httpService.post('http://localhost:8000/api/login', {email: email, password: password},
      { headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest' }) }).subscribe(
      data => this.processAuthData(data),
      err => console.log('Wrong email or pass')
    ) ;

  }

  /*deleted(id: number) {
    return this.httpService.post('http://localhost:8000/api/users/{id}/delete',{id: number},
      { headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest' }) }).subscribe(
      data => this.processAuthData(data),
      err => console.log('Wrong email or pass')
    ) ;

  }*/

  public processAuthData(data) {
    if (data && data.token)  {


      localStorage.setItem('wedechurchTok', JSON.stringify(data.token));
      this.router.navigate(['admin-page']);
    }
  }
}
