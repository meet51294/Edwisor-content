import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'signup', component: SignUpComponent },
      { path: 'forgot', component: ForgotPasswordComponent },
    ]),
    BrowserAnimationsModule
  ],
  declarations: [SignUpComponent, ForgotPasswordComponent]
})
export class UserManagementModule { }
