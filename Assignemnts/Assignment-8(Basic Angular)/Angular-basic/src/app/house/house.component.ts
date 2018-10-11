import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Routes } from '@angular/router'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  public currentviewId;
  public singleHouse;
  baseUrl = "https://anapioficeandfire.com/api/houses"

  constructor(private routers: ActivatedRoute, private _http: HttpClient) {
  }

  ngOnInit() {
    this.currentviewId = this.routers.snapshot.paramMap.get('houseId')
    console.log(this.currentviewId)
    this._http.get(this.baseUrl + '/' + this.currentviewId).subscribe(
      data => {
        this.singleHouse = data;
        console.log(this.singleHouse)

      }


    )


  }

}
