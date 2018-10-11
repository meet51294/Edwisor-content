import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public baseURL = "http://todolist-api.mohitnagpure.com/api/v1.0";
  public deleteid: String;
  public deletetask: String;
  constructor(public http: HttpClient) { }

  //Creating a new Todo List:
  public createTodo = (data) => {
    const params = new HttpParams()
      .set("name", data.name)
      .set("description", data.description)
      .set("createdBy", data.createdBy)
    return this.http.post(`${this.baseURL}/create`, params)
  }

  //Getting All Todo List:
  public getAlltodo = () => {
    return this.http.get(`${this.baseURL}/alltodo`);
  }

  //Removing  todo List:
  public removetodolist = (id) => {
    this.deleteid = id;
    return this.http.delete(`${this.baseURL}/delete/${this.deleteid}`);
  }

  //Get Tasks
  public getTasks = () => {
    return this.http.get(`${this.baseURL}/alltask`);
  }

  //Create A New Task:
  public createnewtask = (data) => {
    const params = new HttpParams()
      .set("listid", data.listid)
      .set("taskName", data.taskName)
    return this.http.post(`${this.baseURL}/createtask`, params);
  }


  //Delete A single task:
  public deletesingletask = (id) => {
    this.deletetask = id;
    return this.http.delete(`${this.baseURL}/deletetask/${this.deletetask}`);
  }

  //Delete Many Task:
  public deleteMany = (id) => {
    return this.http.delete(`${this.baseURL}/deletemany/${id}`);
  }

  //Get All Users:
  public getAllpeople = () => {
    return this.http.get(`${this.baseURL}/all`)
  }
}