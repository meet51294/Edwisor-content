import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ToastsManager } from 'ng2-toastr/ng2-toastr'
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: any;
  public password: any;

  constructor(http: HttpClient, private toastr: ToastsManager, vcr: ViewContainerRef,
    public appService: AppService, public router: Router) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() { }

  public goToSignUp = () => {
    this.router.navigate(['/sign-up'])
  }

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
      this.appService.loginfunction(loginData).subscribe((apiResponse) => {
        if (apiResponse.status === 200) {
          
          Cookie.set('authToken', apiResponse.data.authToken);
          this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
          this.toastr.info("Loading To Chat Menu");
          setTimeout(()=>{
            this.router.navigate(['/chat'])
          },1000)
          
        }
        else {
          this.toastr.error("Some Error Occured")
        }
      }, (err) => {
        this.toastr.error("Some Error Occured")
      });
    }
  }//end of login function

}
