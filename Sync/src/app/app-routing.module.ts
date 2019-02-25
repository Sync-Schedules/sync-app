import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from "./portal/users/users.component";
import { RegisterComponent } from "./register/register.component";
import { PortalComponent } from "./portal/portal.component";
import { ProfileComponent } from "./profile/profile.component";
import { PortalHomeComponent } from "./portal/portal-home/portal-home.component";
import { HelpComponent } from "./help/help.component";
import { HomeComponent } from "./home/home.component";


const routes : Routes = [
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },

  {
    path : 'employees',
    component : EmployeesComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'portal',
    component : PortalComponent
  },
  {
    path : 'portal-home',
    component : PortalHomeComponent
  },
  {
    path : 'profile',
    component : ProfileComponent,
    // canActivate:[AuthGuard]
  },
  {
    path : 'help',
    component : HelpComponent
  }
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule {
}
