import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from './../../http.service';
import { ToastrService } from 'ngx-toastr';
import { SocketService } from './../../socket.service';
import { Cookie } from 'ng2-cookies'
import { Location } from '@angular/common'

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  //Variables TO Create Meeting:

  public userId: String;
  public socials = ["Skype", "Hangouts", "Apache Open Meeting", "Zoom", "GoTo Meeting"]

  public title: String;
  public start: any;
  public end: any;
  public details: String;
  public via: String = '';
  public online: Boolean = false;
  public startTime: any;
  public endTime: any;
  public address: any = "";
  public personId: any;
  constructor(public router: ActivatedRoute, private toastr: ToastrService,
    public httpService: HttpService, public socketservice: SocketService,
    public location: Location) { }

  ngOnInit() {
    this.userId = this.router.snapshot.paramMap.get('id')
  }

  public getBack = () => {
    this.location.back()
  }

  //Add New Meeting:

  public addNewMeeting = () => {
    if (!this.title) {
      this.toastr.warning("Title Is Required")
    }
    else if (!this.details) {
      this.toastr.warning("Details Are Required")
    }
    else if (!this.start) {
      this.toastr.warning("Start-date Is Required")
    }
    else if (!this.end) {
      this.toastr.warning("End-date Is Required")
    }
    else if (!this.startTime) {
      this.toastr.warning("Start-Time Is requred")
    }
    else if (!this.endTime) {
      this.toastr.warning("Title Is Required")
    }
    else {
      let data = {
        title: this.title,
        details: this.details,
        end: this.end,
        start: this.start,
        startTime: this.startTime,
        endTime: this.endTime,
        address: this.address,
        online: this.online,
        personId: this.userId,
        via: this.via
      }
      console.log(data);
      this.socketservice.addEvent(data);
      setTimeout(() => {
        this.getBack();
      }, 1000)

    }

  }
}
