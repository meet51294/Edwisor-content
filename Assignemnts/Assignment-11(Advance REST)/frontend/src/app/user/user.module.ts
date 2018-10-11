import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    FormsModule,
    RouterModule.forChild([
      { path: 'sign-up', component: SignupComponent }
    ])
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class UserModule { }
