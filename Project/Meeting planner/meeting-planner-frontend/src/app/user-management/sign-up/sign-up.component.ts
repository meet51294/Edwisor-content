import { Component, OnInit } from '@angular/core';
import {HttpService} from './../../http.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public firstName:String;
  public lastName:String;
  public email:String;
  public password:String;
  public contactNumber:any;
  public countryCode:any;
  public isAdmin:Boolean=false;

  public codes;
  public adminKey:String;
  public secretKey:String="edwisor";


  constructor(private toastr:ToastrService,public route:Router,
    private http_service:HttpService) { }

  ngOnInit() 
  {
    this.getCodes();
  }

  public gotoLogin=()=>{
    this.route.navigate(['/login'])
  }

  public signUp=()=>{
    if(!this.firstName){
      this.toastr.warning("Enter First Name")
    }
   else if(!this.lastName){
      this.toastr.warning("Enter Last Name")
    }
    else if(!this.email){
      this.toastr.warning("Enter Email")
    }
    else if(!this.password){
      this.toastr.warning("Enter Password")
    }
    else if(!this.contactNumber){
      this.toastr.warning("Enter Your Contact Number")
    }
    else{
      let userData={
        firstName:this.firstName,
        lastName:this.lastName,
        email:this.email,
        password:this.password,
        contactNumber:this.contactNumber,
        countryCode:this.countryCode,
        admin:this.isAdmin
      }
      this.http_service.signupFunction(userData).subscribe((apiResponse:any)=>{
        if(apiResponse.status==200){
          this.toastr.success(apiResponse.message)
        setTimeout(()=>{
          this.gotoLogin();
        },2000)
      }
      else{
        this.toastr.error(apiResponse.message)
      }
      },(error)=>{
        this.toastr.error("Error Occured");
      })
    }
    console.log(this.countryCode)
  }
  public getCodes=()=>{
    this.http_service.getcountryCodes().subscribe((data:any)=>{
      this.codes=data.countries;
      console.log(this.codes)
    },(err)=>{
      console.log(err)
    })
  }
  public verifyAdmin=()=>{
    if(!this.adminKey){
      this.toastr.warning("Enter Secret KEY")
      this.isAdmin=false
      console.log(this.isAdmin)

    }
    else if(this.adminKey!=this.secretKey){
      this.toastr.warning("Wrong Secret Key")
      this.isAdmin=false
      console.log(this.isAdmin);
      
    }
    else{
      this.toastr.success("User is Admin Now")
      this.isAdmin=true;
      console.log(this.isAdmin);
      
    }
  }

}
