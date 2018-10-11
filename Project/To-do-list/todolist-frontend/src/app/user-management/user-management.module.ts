import { NgModule } from '@angular/core';
import  { CommonModule } from '@angular/common';
import  {RouterModule,Routes} from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LoginComponent}  from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:"signup",component:SignUpComponent},
      {path:"forgot",component:ForgotPasswordComponent},
     
    ]),
   
  ],
  declarations: [LoginComponent, SignUpComponent, ForgotPasswordComponent, ]
})
export class UserManagementModule { }
