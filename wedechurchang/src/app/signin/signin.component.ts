import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authservice: AuthService) {
  }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    this.authservice.authenticate(form.value.email, form.value.password);
  }

}



