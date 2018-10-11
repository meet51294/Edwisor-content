import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementModule } from './user-management/user-management.module';
import { MenuModule } from './menu/menu.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './user-management/login/login.component';
import { AppService } from './app.service';
import { HttpService } from './http.service';
import { SocketService } from './socket.service';
import { Socket2Service } from './socket2.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([

      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '*', component: LoginComponent }
    ]),
    UserManagementModule,
    HttpClientModule,
    MenuModule
  ],
  providers: [AppService, HttpService, SocketService, Socket2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
