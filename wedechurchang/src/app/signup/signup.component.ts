import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authserv: AuthService) { }

  ngOnInit() {
  }
  /*onSignup(form: NgForm) {
    this.authserv.signup(form.value.username, form.value.email, form.value.password)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );}*/


}
