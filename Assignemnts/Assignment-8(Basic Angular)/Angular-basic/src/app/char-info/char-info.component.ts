import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-char-info',
  templateUrl: './char-info.component.html',
  styleUrls: ['./char-info.component.css']
})
export class CharInfoComponent implements OnInit {
  public currentChar;
  public currentId;
  public baseUrl = "https://anapioficeandfire.com/api/characters";
  constructor(private _http: HttpClient, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.currentId = this._route.snapshot.paramMap.get("charId")
    console.log(this.currentId)
    this._http.get(this.baseUrl + '/' + this.currentId).subscribe(
      data => {
        this.currentChar = data;
        console.log(this.currentChar);
      }
    )
  }

}
