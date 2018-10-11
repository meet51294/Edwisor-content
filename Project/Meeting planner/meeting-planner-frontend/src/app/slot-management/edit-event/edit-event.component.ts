import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketService } from '../../socket.service';
import { HttpService } from '../../http.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common'

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  public meetingID;
  public personID;
  public currentDetails = '';
  public socials = ["Skype", "Hangouts", "Hike",  "Apache Open Meeting", "Zoom", "GoTo Meeting"]

  //Variable To Create Loading Spinner
  public spinner = false;

  constructor(public route: ActivatedRoute, public socketService: SocketService,
    public httpService: HttpService, public toastr: ToastrService, public location: Location) { }

  ngOnInit() {
    this.meetingID = this.route.snapshot.paramMap.get('id')
    this.getEventDetails();
  }
  public goBack = () => {
    this.location.back();
  }

  //Getting Details Of Existing Event:

  public getEventDetails = () => {
    this.httpService.getSingleEventDetail(this.meetingID).subscribe((apiResponse: any) => {
      this.currentDetails = apiResponse.data

      this.toastr.success("Event Details Loaded")
    }, (error) => {
      console.log("Error Occured")
      console.log(error);
      this.toastr.error('Error While Getting Details')
    })
  }

  //Editing Event:

  public editEventDetails = (meetingID) => {
    this.spinner = true;
    this.httpService.editsEvent(meetingID, this.currentDetails).subscribe((apiResponse: any) => {
      if (apiResponse.status == 200) {
        this.toastr.success("SuccessFully Edited!");
        this.spinner = false;
        setTimeout(() => {
          this.goBack()
        }, 3000)
      }
      else {

      }
    }, (err) => {
      this.toastr.error("Error Occured")
    })

  }

}
