import { BrowserModule } from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';
import { Routes, CanActivate} from '@angular/router';
import {RouterModule} from '@angular/router';
import {Headers} from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
// import { APP_ROUTES_PROVIDER} from './app.routes';
//import { ChuchesListComponent } from './chuches-list/chuches-list.component';
import { ValidatedUsersComponent } from './validated-users/validated-users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ValidatedChurchListComponent } from './validated-church-list/validated-church-list.component';
import { routing} from './app.routes';
//import {UsersService} from './service/users.service';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {AuthService} from './auth.service';

import {CommonModule} from '@angular/common';
import {AuthGuardService} from './auth-guard.service';
import {UsersService} from "./services/users.service";
import {UsersListService} from "./services/users-list.service";
import {ChurchsListService} from "./services/churchs-list.service";
//import {ChurchsListService} from "./services/churchs-list.service";
import { ChuchesListComponent } from "./chuches-list/chuches-list.component";
//import {TokService} from "./services/tok.service";

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ChuchesListComponent,
    ValidatedUsersComponent,
    UsersListComponent,
    ValidatedChurchListComponent,
    SignupComponent,
    SigninComponent,
    SignoutComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],

  providers: [AppComponent,ChurchsListService, UsersListService, UsersService, AuthService, HttpClient, BrowserModule, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
