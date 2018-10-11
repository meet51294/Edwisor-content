import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies'
import { SocketService } from '../../socket.service';


@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  public token: String;
  public users = [];
  public currentUser;
  public id;

  constructor(public httpService: HttpService, public toastr: ToastrService,
    public router: Router, public socketservice: SocketService) { }

  ngOnInit() {
    this.token = Cookie.get('authToken')
    this.id = Cookie.get('userId')
    this.currentUser = Cookie.get('name')
    this.checkToken();
    this.verifyUserConfirmation();
    this.allUsers()
  }


  public checkToken = () => {
    if (this.token === null || this.token === '' || this.token === undefined || this.token == "undefined") {
      this.toastr.error("Token Missing")
      this.router.navigate(['/login'])
    }
    else {}
  }

  //Verifying User:

  public verifyUserConfirmation = () => {
    this.socketservice.verifyUser().subscribe(data => {
      this.socketservice.setUser(this.token)
    })
  }



  //Getting All Users:

  public allUsers = () => {
    this.httpService.getAllUserDetails().subscribe((apiResponse: any) => {
      apiResponse.data.map((user) => {
        if (user.admin == false) {
          let name = user.firstName + " " + user.lastName
          let temp = {
            'userName': name, 'userId': user.userId, 'email': user.email
            , 'contactNumber': user.contactNumber, 'countryCode': user.countryCode
          }
          this.users.push(temp)
          console.log(this.users);
        }
        else { }
      })
    }, (error) => {
      console.log(error)
    })
  }

  //Logout:

  public logout = () => {
    console.log(this.id)
    this.httpService.logoutFunction(this.id).subscribe((apiResponse) => {
      console.log(apiResponse);
      Cookie.delete('authToken')
      Cookie.delete('name')
      Cookie.delete('userId')
      this.id = '';
      this.currentUser = ''
      this.token = ''
      this.socketservice.disconnect()
      setTimeout(() => {
        this.toastr.success('Logout Successfull')
        this.router.navigate(['/login'])
      }, 500)
    })
  }

}
