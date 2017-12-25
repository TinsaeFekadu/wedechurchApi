import {AdminPageComponent} from './admin-page';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {UsersListComponent} from './users-list/users-list.component';
import {ChuchesListComponent} from './chuches-list/chuches-list.component';
import {ValidatedChurchListComponent} from './validated-church-list/validated-church-list.component';
import {ValidatedUsersComponent} from './validated-users/validated-users.component';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {AuthGuardService as AuthGuard} from './auth-guard.service';
const routes: Routes = [
  { path: 'admin-page',
    component: AdminPageComponent,
    canActivate: [AuthGuard] },
  { path: 'users',
    component: UsersListComponent,
    canActivate: [AuthGuard]},
  {path: 'church',
    component: ChuchesListComponent,
    canActivate: [AuthGuard]},
  {path: 'v-user',
    component: ValidatedUsersComponent,
    canActivate: [AuthGuard]},
  {path: 'v-Church',
    component: ValidatedChurchListComponent,
    canActivate: [AuthGuard]},
  {path: 'signup',
    component: SignupComponent,
    canActivate: [AuthGuard]},
  {path: 'signin',
    component: SigninComponent
  }


];

export const routing = RouterModule.forRoot(routes);

