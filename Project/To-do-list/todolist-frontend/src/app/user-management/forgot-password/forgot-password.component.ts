import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from './../../app.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public email: any;

  constructor(public toastr: ToastrService, public appService: AppService) { }
  ngOnInit() { }

  public forgotPassword = () => {
    if (!this.email) {
      this.toastr.warning("Email Is Mandatory");
    }
    else {
      this.appService.forgotPassword(this.email).subscribe((apiResponse) => {
        if (apiResponse.status == 200) {
          this.toastr.success(apiResponse.message);
        }
        else {
          this.toastr.error(apiResponse.message);
        }
      }, (err) => {
        this.toastr.error(" Connection Error Took Place");
      });
    }
  }
}
