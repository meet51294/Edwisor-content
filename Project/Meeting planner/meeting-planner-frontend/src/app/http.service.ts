import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { checkNoChangesNode } from '@angular/core/src/view/view';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public baseUrl = "http://localhost:8080/api/v1/user";
  public url2 = "http://localhost:8080/api/v1/meeting";

  constructor(public http: HttpClient) { }

  //Sign-Up Function:

  public signupFunction = (data) => {
    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('password', data.password)
      .set('email', data.email)
      .set('contactNumber', data.contactNumber)
      .set('countryCode', data.countryCode)
      .set('admin', data.admin)
    return this.http.post(`${this.baseUrl}/signup`, params)
  }

  //Login Function :

  public loginFunction = (data) => {
    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password)
    return this.http.post(`${this.baseUrl}/login`, params)
  }

  //Forgot Password:

  public forgotPasswordFunction = (email) => {
    const params = new HttpParams()
      .set('email', email)
    return this.http.post(`${this.baseUrl}/forgot`, params)
  }

  //Logout Function:

  public logoutFunction = (id) => {
    return this.http.delete(`${this.baseUrl}/logout/${id}`)
  }

  //Get Codes:

  public getcountryCodes = () => {
    return this.http.get("https://api.jsonbin.io/b/5b13cc87c2e3344ccd96cb9b")
  }

  //Get ALL Users:

  public getAllUserDetails = () => {
    return this.http.get(`${this.baseUrl}/getAll`)
  }

  //Get ALL Meetings:

  public getAllMeetings = (id) => {
    return this.http.get(`${this.url2}/getAll/${id}`)
  }

  //Get Single Event:

  public getSingleEventDetail = (eventId) => {
    return this.http.get(`${this.url2}/getSingle/${eventId}`)
  }

  //Edit Meeting Event:

  public editsEvent = (id, details) => {
    return this.http.put(`${this.url2}/edit/${id}`, details)
  }
}
