import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { RouterModule, Router } from '@angular/router';
import { LoginComponent } from './user-management/login/login.component';
import { UserManagementModule } from './user-management/user-management.module';
import { HttpService } from './http.service';
import { CalendarModule } from 'angular-calendar'
import { SlotManagementModule } from './slot-management/slot-management.module';
import { FormsModule } from '@angular/forms'
import { SocketService } from './socket.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]),
    UserManagementModule,
    CalendarModule.forRoot(),
    SlotManagementModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
