import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class Socket2Service {
  public baseurl = "http://todolist-api.mohitnagpure.com/"
  public socket;

  constructor() {
    this.socket = io(this.baseurl)
  }

  //Authentication Section:

  public verifyUser = () => {
    return Observable.create((observer) => {
      this.socket.on("verify-user", (socketData) => {
        observer.next(socketData)
      })
    })
  }
  public setUser = (token) => {
    this.socket.emit("set-user", token)
  }
  public getOnlineUsers = () => {
    return Observable.create((observer) => {
      this.socket.on("onlineUsers", (socketData) => {
        observer.next(socketData);
      })
    })
  }

  //Creating A New List:

  public createNewList = (listData) => {
    this.socket.emit("createList", listData)
  }
  public createlistresponse = () => {
    return Observable.create((observer) => {
      this.socket.on("createList-res", (data) => {
        observer.next(data);
      })
    })
  }

  //Creating A New Task:

  public createtask = (data) => {
    this.socket.emit("createtask", data);
  }
  public taskResponse = () => {
    return Observable.create((observer) => {
      this.socket.on("createtask-res", (data) => {
        observer.next(data);
      })
    })
  }

  //Deleting A Task:

  public deleteUniqueTask = (data) => {
    this.socket.emit('deleteTask', data);
  }
  public deleteResponse = () => {
    return Observable.create((observer) => {
      this.socket.on('deleteResponse', (data) => {
        observer.next(data);
      })
    })
  }

  // Deleting A List
  public deletethelist = (data) => {
    this.socket.emit("deletelist", data)
  }
  public deletelistRes = () => {
    return Observable.create((observer) => {
      this.socket.on('deletelistres', (data) => {
        observer.next(data)
      })
    })
  }
}
