import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import  {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  public baseUrl = 'http://todolist-api.mohitnagpure.com/api/v1.0'
  constructor(public http:HttpClient) {}

  //SIGN-UP Function:

  public signupFunction(data):Observable<any>{
    const params = new HttpParams()
    .set('email',data.email)
    .set('textPassword',data.textPassword)
    .set('firstName',data.firstName)
    .set('lastName',data.lastName)
    .set('mobileNumber',data.mobileNumber)
    .set('countryCode',data.countryCode)
    return this.http.post(`${this.baseUrl}/signup`,params);
  }

//LOG-IN Function:

public loginFunction(data):Observable<any>{
  const params = new HttpParams()
  .set('email',data.email)
  .set('textPassword',data.textPassword)
  return this.http.post(`${this.baseUrl}/login`,params);
}

//Forgot Password:
public forgotPassword(email):Observable<any>{
  const params = new HttpParams()
  .set('email',email)
  return this.http.post(`${this.baseUrl}/restore`,params);
}

//Delete Account
public removeAccount=(userID)=>{
  return this.http.delete(`${this.baseUrl}/deleteuser/${userID}`);
}

}//end AppService Class

