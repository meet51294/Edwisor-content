import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule,HttpErrorResponse} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookViewComponent } from './book-view/book-view.component';
import { CharViewComponent } from './char-view/char-view.component';
import { HouseViewComponent } from './house-view/house-view.component';
import { Observable } from 'rxjs';

import { HttpClient } from 'selenium-webdriver/http';
import { HouseComponent } from './house/house.component';
import { CharInfoComponent } from './char-info/char-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookViewComponent,
    CharViewComponent,
    HouseViewComponent,
    HouseComponent,
    CharInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path:'home',component:HomeComponent},
      {path:'', redirectTo:'home',pathMatch:"full"},
      {path:'char',component:CharViewComponent},
      {path:'book',component:BookViewComponent},
      {path:'house',component:HouseViewComponent},
      {path:'view/:houseId',component:HouseComponent},
      {path:'info/:charId',component:CharInfoComponent}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
