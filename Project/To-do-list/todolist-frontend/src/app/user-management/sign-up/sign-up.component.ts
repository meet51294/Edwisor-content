import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from './../../app.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public email: String;
  public textPassword: any;
  public firstName: String;
  public lastName: String;
  public mobileNumber: String;
  public countryCode: String;
  public codes = [];


  constructor(public toastr: ToastrService, public appService: AppService, public router: Router, public http: HttpClient) { }
  ngOnInit() {
    this.getCode()
  }

  public gotoLogin = () => {
    this.router.navigate(['/login']);
  }

  public signup = () => {
    if (!this.email) {
      this.toastr.warning("Enter Your Email");
    }
    else if (!this.textPassword) {
      this.toastr.warning("Enter Your Password");
    }
    else if (!this.firstName) {
      this.toastr.warning("Enter Your First Name")
    }
    else if (!this.lastName) {
      this.toastr.warning("Enter Your Last Name")
    }
    else if (!this.mobileNumber) {
      this.toastr.warning("Enter Your Mobile Number");
    }
    else {
      let data = {
        email: this.email,
        textPassword: this.textPassword,
        firstName: this.firstName,
        lastName: this.lastName,
        mobileNumber: this.mobileNumber,
        countryCode: this.countryCode
      }
      this.appService.signupFunction(data).subscribe((apiResponse) => {
        console.log(apiResponse);
        if(apiResponse.status==200){
          this.toastr.success("Sign-Up Successful");
          setTimeout(() => {
            this.gotoLogin();
          }, 2000)
        }
        else{
          this.toastr.error(apiResponse.message);
        }

      }, (err) => {
        this.toastr.error("Error Occured");
      })
    }
  }
  public getCode = () => {
    this.http.get("https://api.jsonbin.io/b/5b13cc87c2e3344ccd96cb9b").subscribe((data: any) => {
      
      this.codes = data.countries
      console.log(this.codes)

    }, (error) => {
      console.log("Error Occured", error)
      this.toastr.error("Error Occured")
    });


  }
}
