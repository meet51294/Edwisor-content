import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../http.service';
import { Location } from '@angular/common';
import { SocketService } from '../../socket.service';


@Component({
  selector: 'app-events-view',
  templateUrl: './events-view.component.html',
  styleUrls: ['./events-view.component.css']
})

export class EventsViewComponent implements OnInit {
  public dateId: any
  public userId: any
  public allMeetings = []
  public hasEvents: Boolean;
  constructor(public location: Location, public route: ActivatedRoute, public router: Router
    , public httpService: HttpService, public socketService: SocketService) { }

  ngOnInit() {
    console.log(this.allMeetings);
    this.dateId = this.route.snapshot.paramMap.get('day')
    this.userId = this.route.snapshot.paramMap.get('id')
    this.hasEvents = false
    this.getAllEvents()


  }

  //Getting All Meetings:

  public getAllEvents = () => {
    this.httpService.getAllMeetings(this.userId).subscribe((apiResponse: any) => {
      apiResponse.data.map((index) => {
        if (this.dateId == index.start || this.dateId == index.end) {
          this.allMeetings.push(index)
          this.hasEvents = true;
        }
        else {
          console.log("Not Match")
        }
      })
    }, (err) => {
      console.log(err);
    })
  }

  //Navigating To Previous Page:

  public goBack = () => {
    this.location.back()
  }

  //Delete Meeting:

  public deleteMeeting = (eventId) => {
    let data = {
      eventId: eventId,
      id: this.userId
    }
    this.socketService.deleteEvent(data)
    setTimeout(() => {
      this.goBack()
    }, 1000)
  }

  public moveToEdit = (id) => {
    this.router.navigate(['/edit-event', id])
  }
}
