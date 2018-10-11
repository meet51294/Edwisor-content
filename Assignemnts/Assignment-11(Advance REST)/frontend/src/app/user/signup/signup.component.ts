import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AppService } from '../../app.service';
import { ToastsManager } from 'ng2-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public firstName: any;
  public lastName: any;
  public mobileNumber: any;
  public email: any;
  public password: any;
  constructor(public appService: AppService, public toastr: ToastsManager, vcr: ViewContainerRef, public router: Router) {
    this.toastr.setRootViewContainerRef(vcr)
  }
  ngOnInit() { }

  public goToSignIn = () => {
    this.router.navigate(['/'])
  }

  public signUp = () => {
    if (!this.firstName) {
      this.toastr.warning("Please Enter Your First Name");
    }
    else if (!this.lastName) {
      this.toastr.warning("Please Enter Your Last Name");
    }
    else if (!this.mobileNumber) {
      this.toastr.warning("Please Enter Your Mobile Number");
    }
    else if (!this.email) {
      this.toastr.warning("Please Enter Your Email");
    }
    else if (!this.password) {
      this.toastr.warning("Please Enter Your Password");
    }
    else {
      let data = {
        email: this.email,
        password: this.password,
        mobileNumber: this.mobileNumber,
        firstName: this.firstName,
        lastName: this.lastName
      }
      this.appService.signupfunction(data).subscribe((apiResponse) => {
        if (apiResponse.status === 200) {
          this.toastr.success("Sign Up Successful")
          setTimeout(() => {
            this.goToSignIn()
          }, 2000)
        }
        else {
          this.toastr.error(apiResponse.message);
        }
      }, (err) => {
        this.toastr.error('Some Error Occured')
      })
    }
  }

}//end of class

