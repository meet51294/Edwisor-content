import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-char-view',
  templateUrl: './char-view.component.html',
  styleUrls: ['./char-view.component.css']
})
export class CharViewComponent implements OnInit {
  public limit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }

  ngOnInit() {
  }

}
