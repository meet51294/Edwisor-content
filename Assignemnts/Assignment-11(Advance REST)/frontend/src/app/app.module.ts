import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserModule } from './user/user.module';
import { LoginComponent } from './user/login/login.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppService } from './app.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatModule } from './chat/chat.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    ToastModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ChatModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '*', component: LoginComponent }
    ])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
