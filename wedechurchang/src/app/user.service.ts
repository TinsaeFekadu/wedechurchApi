import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from './user';
import { USER } from './mock-user';
import { MessageService } from './message.service';
@Injectable()
export class UserService {

  constructor(public messageService: MessageService) { }


  getUser(): Observable<User[]> {
    this.messageService.add('UserService: fetched users');
    return of(USER);
  }

}
