import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css']
})
export class HouseViewComponent implements OnInit {
  allHouses =[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
   
    this.http.get("https://anapioficeandfire.com/api/houses").subscribe(
    (data:any)=>{
        this.allHouses=data;
        console.log(this.allHouses)
      }
    )
  }
  

}
