import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Routes } from '@angular/router';



@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  public countries = [];
  public countryId;

  constructor(private http: HttpClient, private activated: ActivatedRoute) {
  }
  ngOnInit() {
    if (this.activated.snapshot.paramMap.get('cid')) {
      this.countryId = this.activated.snapshot.paramMap.get('cid')
      this.http.get("https://restcountries.eu/rest/v2/currency" + '/' + this.countryId).subscribe(
        (data: any) => {
          this.countries = data;
          alert("Currency Filter Applied, If You Want To See All-Countries  Again Click On AllCountries In Navbar")

          console.log(this.countries);

        }
      )
    }
    else if (this.activated.snapshot.paramMap.get('lid')) {
      this.countryId = this.activated.snapshot.paramMap.get('lid')
      this.http.get("https://restcountries.eu/rest/v2/lang" + '/' + this.countryId).subscribe(
        (data: any) => {
          this.countries = data;
          alert("Language Filter Applied, If You Want To See All-Countries  Again Click On AllCountries In Navbar")

          console.log(this.countries);

        }
      )
    }

    else {

      this.http.get("https://restcountries.eu/rest/v2/all").subscribe(
        (data: any) => {
          this.countries = data;
          console.log(this.countries);
        }
      )
    }

  }
}

