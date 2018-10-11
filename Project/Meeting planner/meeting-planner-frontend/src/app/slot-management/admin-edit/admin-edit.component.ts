import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

import {
  startOfDay, endOfDay, subDays,
  addDays, endOfMonth, isSameDay,
  isSameMonth, addHours, isThisMonth
} from 'date-fns'
import { HttpService } from '../../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { Form } from '@angular/forms'


@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  public userId;
  public allMeetings = []

  //Calendar Variables:

  view: string = 'month';
  viewDate: Date = new Date()
  public clickedDate: any;
  refresh: Subject<any> = new Subject();
  events: CalendarEvent[] = []

  constructor(public httpService: HttpService, public route: ActivatedRoute,
    public toastr: ToastrService, public router: Router) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('userId')
    this.getEvents()
  }

  //Getting All Meeting Events:

  public getEvents = () => {
    this.httpService.getAllMeetings(this.userId).subscribe((eventDetails: any) => {
      if (eventDetails.data != null) {
        eventDetails.data.map((index) => {
          let temp = {

            title: index.title,
            start: new Date(index.start),
            end: new Date(index.end),
            color: {
              primary: 'red',
              secondary: 'grey'
            },
          }
          this.events.push(temp)
          console.log(this.events)
        })
      }
      else {
        console.log("No details Found")
      }
    }, (err) => {
      console.log(err)
    })
  }

  //Getting Single Day Event:

  public getSingleDayEvents = (day) => {
    this.clickedDate = moment(day).format('MM/DD/YYYY')
    this.router.navigate(['/events-edit', this.userId, this.clickedDate])
  }
}
