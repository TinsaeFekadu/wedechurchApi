import { Injectable } from '@angular/core';
import { Response} from "@angular/http";
import { Observable } from "rxjs/Rx";
//import {Users} from "..//users-list/users-list";

// Import RxJs required methods
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable()

export class UsersService {

  constructor(private httpService: HttpClient){}

    public getUsers(){
      return this.httpService.get('http://localhost:8000/api/users');
    }
  }

