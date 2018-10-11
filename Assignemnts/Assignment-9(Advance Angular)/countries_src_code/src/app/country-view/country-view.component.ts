import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Routes } from '@angular/router'
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css']
})


export class CountryViewComponent implements OnInit {
  public countryid;
  public url = "https://restcountries.eu/rest/v2/name"
  public uniquecountry;

  constructor(private http: HttpClient, private _activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.countryid = this._activatedRoute.snapshot.paramMap.get('id')
    console.log(this.countryid)
    this.http.get(this.url + '/' + this.countryid).subscribe(
      (data) => {
        this.uniquecountry = data;
        console.log(this.uniquecountry);
      }
    )
  }
  public goback = () => {
    this.router.navigate(['/coun'])
  }
}
