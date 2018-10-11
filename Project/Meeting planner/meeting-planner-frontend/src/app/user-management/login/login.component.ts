import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: String;
  public password: String;

  constructor(private httpService: HttpService, public toastr: ToastrService, public router: Router) { }

  ngOnInit() { }

  //Move To SignUp:

  public gotoSignup = () => {
    this.router.navigate(['/signup'])
  }

  //Function To Login:

  public login = () => {
    if (!this.email) {
      this.toastr.warning("Enter Your Email")
    }
    else if (!this.password) {
      this.toastr.warning("Password Required")
    }
    else {
      let loginData = {
        email: this.email,
        password: this.password
      }
      this.httpService.loginFunction(loginData).subscribe((apiResponse: any) => {
        console.log(apiResponse)
        if (apiResponse.status == 200) {
          this.toastr.success(apiResponse.message)

          if (apiResponse.data.userDetails.admin == true) {
            Cookie.set('authToken', apiResponse.data.authToken)

            Cookie.set('name', apiResponse.data.userDetails.firstName + " "
              + apiResponse.data.userDetails.lastName + '-admin')


            Cookie.set('userId', apiResponse.data.userDetails.userId)
            setTimeout(() => {

              this.router.navigate(['/admin'])

            }, 2000)

          }
          else {
            Cookie.set('authToken', apiResponse.data.authToken)
            Cookie.set('name', apiResponse.data.userDetails.firstName + " "
              + apiResponse.data.userDetails.lastName)
            Cookie.set('userId', apiResponse.data.userDetails.userId)

            setTimeout(() => {
              this.router.navigate(['/normal'])
            }, 2000)
          }
        }
        else {
          this.toastr.warning(apiResponse.message)
        }
      }, (error) => {
        this.toastr.error("Error Occured")
      })
    }
  }

}
