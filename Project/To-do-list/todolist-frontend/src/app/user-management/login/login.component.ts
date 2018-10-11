import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AppService } from './../../app.service';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: String;
  public textPassword: String;

  constructor(public toastr: ToastrService, public router: Router, public appService: AppService) { }
  ngOnInit() { }
  public movetoMenu = () => {
    this.router.navigate(['/todomenu']);
  }

  public login = () => {
    if (!this.email) {
      this.toastr.warning("Enter Your Email");
    }
    else if (!this.textPassword) {
      this.toastr.warning("Enter Your Password");
    }
    else {
      let data = {
        email: this.email,
        textPassword: this.textPassword
      }
      this.appService.loginFunction(data).subscribe((apiResponse) => {
        if (apiResponse.status == 200) {
          Cookie.set('id', apiResponse.data.userId);
          Cookie.set('fullName', apiResponse.data.userDetails.firstName + " " + apiResponse.data.userDetails.lastName);
          Cookie.set('token',apiResponse.data.token)
          this.toastr.success("Login Successfull");
          setTimeout(() => {
            this.movetoMenu();
          }, 2000)
        }

      }, (err) => {
        if (err.error.message) {
          this.toastr.error(err.error.message);
        }
        else {
          this.toastr.error("Connection Error")
        }
      })
    }
  }
}
