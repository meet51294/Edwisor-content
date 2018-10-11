import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegionComponent } from './region/region.component';
import { RegionVieComponent } from './region-view/region-view.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryViewComponent } from './country-view/country-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegionComponent,
    RegionVieComponent,
    CountriesComponent,
    CountryViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent },
      { path: 'coun', component: CountriesComponent },
      { path: 'region', component: RegionComponent },
      { path: 'country/:id', component: CountryViewComponent },
      { path: 'regionview/:regid', component: RegionVieComponent },
      { path: 'currency/:cid', component: CountriesComponent },
      { path: 'language/:lid', component: CountriesComponent }
    ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
