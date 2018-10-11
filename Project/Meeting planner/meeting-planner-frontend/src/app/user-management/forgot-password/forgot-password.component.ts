import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public email: String

  constructor(public httpService: HttpService, public toastr: ToastrService,
    public router: Router) { }

  ngOnInit() { }

  //Function To Recover Password:

  public forgotPassword = () => {
    if (!this.email) {
      this.toastr.warning("Enter Your Email Address")
    }
    else {
      this.httpService.forgotPasswordFunction(this.email).subscribe((apiResponse: any) => {
        if (apiResponse.status === 200) {
          this.toastr.success(apiResponse.message)
        }
        else {
          this.toastr.warning(apiResponse.message)
        }
      }, (error) => {
        console.log(error)
        this.toastr.error("Connection Error Occured")
      })
    }
  }

}
