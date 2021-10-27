import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainpageComponent } from './mainpage/mainpage.component';

import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { Role } from './_models/role.model';
import { User } from './_models/user.model';
import { UserTypes } from './_models/usertypes.model';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  // {
  //   path: '',
  //   component: MainpageComponent
  // },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent
  // }
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
},
{
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    // data: { roles: [] }
},
{
    path: 'login',
    component: LoginComponent
},
{
  path: 'user',
  component: UserComponent
},


// otherwise redirect to home
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
