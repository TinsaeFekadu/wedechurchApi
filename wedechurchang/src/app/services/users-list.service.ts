import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Headers} from "@angular/http";
import {HttpHeaders} from "@angular/common/http";
//import {UserMapper} from "../users-list/UserMapper";


@Injectable()
export class UsersListService {


public UserEmmiter = new EventEmitter<any>();


constructor(private httpClient: HttpClient) { }

public getToken(){
    return localStorage.getItem('wedechurchTok');
}

  public getUsers() {
    const url = 'http://localhost:8000/api/users?token='+ this.getToken();
    this.httpClient.get(url).subscribe(
      data => this.UserEmmiter.emit(data)
    );
  }


  public deleteUsers(id: number) {
    const url = 'http://localhost:8000/api/users/'+id+'/delete';
    return this.httpClient.post(url,{},
      { headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest' }) });
}

  public validateUser(id: number){
  const url = 'http://localhost:8000/api/users/validate/'+id;
  return this.httpClient.post(url,{},
    { headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'  }) });
  }


/*

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }*/

}
