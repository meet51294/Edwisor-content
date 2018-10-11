import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-region-view',
  templateUrl: './region-view.component.html',
  styleUrls: ['./region-view.component.css']
})
export class RegionVieComponent implements OnInit {
  public regionId;
  public baseUrl = "https://restcountries.eu/rest/v2/region";
  public regionData;

  constructor(private activate: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.regionId = this.activate.snapshot.paramMap.get('regid')
    console.log(this.regionId);
    this.http.get(this.baseUrl + '/' + this.regionId).subscribe(
      data => {
        this.regionData = data
        console.log(this.regionData)
      }
    )
  }

  public goBackRegion() {
    this.router.navigate(['/region'])
  }

}
