import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Cookie} from 'ng2-cookies/ng2-cookies';


@Injectable()
export class AppService {
  public baseUrl = 'http://localhost:3000/api/v2/users'

  constructor(public http: HttpClient) { }

  // Getting Information Stored In Local Storage

  public getUserInfoFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('UserInfo'));
  }

  //Storing Information In Local Storage

  public setUserInfoInLocalStorage = (data) => {
    localStorage.setItem('UserInfo', JSON.stringify(data))
  }

  //SIGN UP FUNCTION

  public signupfunction(data): Observable<any> {
    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password)
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('mobileNumber', data.mobileNumber)
    return this.http.post(`${this.baseUrl}/signup`, params)
  }

  //LOGIN FUNCTION

  public loginfunction(data): Observable<any> {
    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password)
    return this.http.post(`${this.baseUrl}/login`, params)
  }
}
