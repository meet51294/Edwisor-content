import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

import {
  startOfDay, endOfDay, subDays,
  addDays, endOfMonth, isSameDay,
  isSameMonth, addHours
} from 'date-fns'
import { HttpService } from '../../http.service';
import { Cookie } from 'ng2-cookies';
import { Router } from '@angular/router';
import { SocketService } from './../../socket.service'


@Component({
  selector: 'app-normal-view',
  templateUrl: './normal-view.component.html',
  styleUrls: ['./normal-view.component.css']
})
export class NormalViewComponent implements OnInit {

  //Variables For Cookies:

  public id: String;
  public userName;
  public token;
  public addResponse: String;

  //Variables  For Calendar:

  view: string = 'month';
  viewDate: Date = new Date();
  events: CalendarEvent[] = []

  refresh: Subject<any> = new Subject();
  activeDayIsOpen: boolean = true;
  constructor(public httpService: HttpService, public toastr: ToastrService
    , public router: Router, public socketservice: SocketService) { }

  ngOnInit() {
    this.token = Cookie.get('authToken')
    this.userName = Cookie.get('name')
    this.id = Cookie.get('userId')
    this.checkToken();
    this.verifyUserConfirmation();
    this.getAllevents()
    this.getaddEventResponse();
    this.deleteEventResponse();
  }

  //Checking AuthToken

  public checkToken = () => {
    if (this.token === null || this.token === undefined || this.token === '' || this.token == "undefined") {
      this.toastr.error('Token Missing')
      this.router.navigate(['/login'])
    }
    else { }
  }

  //Verifying User:

  public verifyUserConfirmation = () => {
    this.socketservice.verifyUser().subscribe(data => {
      console.log(data);
      this.socketservice.setUser(this.token)

    })
  }

  //Response when New Event is Added By Admin:

  public getaddEventResponse = () => {
    this.socketservice.addEventResponse().subscribe(response => {
      this.addResponse = response
      if (this.addResponse === this.id) {
        this.toastr.info("New Meeting Added,Check Email")
        this.events = []
        this.getAllevents()
      }
      else { }
    }, err => {
      console.log("Error")
    })
  }

  //Response when Event is Deleted By Admin:
  public deleteEventResponse = () => {
    this.socketservice.deleteEventResponse().subscribe(response => {
      if (response == this.id) {
        this.toastr.warning("Meeting Cancelled,Check Email")
        this.events = []
        this.getAllevents()
      }
      else { }
    })
  }

  //Getting ALL Meetings:

  public getAllevents = () => {
    this.httpService.getAllMeetings(this.id).subscribe((eventDetails: any) => {
      if (eventDetails.data != null) {
        eventDetails.data.map((index) => {
          let temp = {
            title: index.title,
            start: new Date(index.start),
            end: new Date(index.end),
            color: {
              primary: 'deepskyblue',
              secondary: 'white'
            },
            description: index.details,
            startTime: index.startTime,
            endTime: index.endTime,
            Online: index.online,
            via: index.via,
            address: index.address

          }
          this.events.push(temp)

        })
      }
      else {
        console.log("No Meetings")
      }
    }, (error) => {
      console.log(error)
    })
  }

  //Logout Function:

  public logout = () => {
    console.log(this.id)
    this.httpService.logoutFunction(this.id).subscribe((apiResponse) => {
      console.log(apiResponse);
      Cookie.delete('authToken')
      Cookie.delete('name')
      Cookie.delete('userId')
      this.id = '';
      this.userName = ''
      this.token = ''
      this.socketservice.disconnect()
      setTimeout(() => {
        this.toastr.success('Logout Successfull')
        this.router.navigate(['/login'])
      }, 500)
    })
  }
}
