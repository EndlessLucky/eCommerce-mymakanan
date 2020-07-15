import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationComponent} from "./authentication.component";
import {LoginComponent} from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import {SocialLoginComponent} from "./social-login/social-login.component";

const routes: Routes = [
  {
    path: '', component: AuthenticationComponent,
    children: [
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'social_login', component: SocialLoginComponent
      },
      {
        path: 'register', component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
