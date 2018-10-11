import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  allBooks = [];

  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.http.get("https://anapioficeandfire.com/api/books/").subscribe(
      (data: any) => {
        this.allBooks = data
        console.log(this.allBooks)
      }
    )

  }
}
