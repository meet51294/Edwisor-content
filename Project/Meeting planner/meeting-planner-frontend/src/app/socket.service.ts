import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public baseURL = "http://localhost:8080"
  public socket = io(this.baseURL);

  constructor() { }

  //Verifying User:

  public verifyUser = () => {
    return Observable.create((observer) => {
      this.socket.on('verify-user', (data) => {
        observer.next(data)
      })
    })
  }

  //Setting User:

  public setUser = (token) => {
    this.socket.emit('setuser', token)
  }

  //Adding Event:

  public addEvent = (data) => {
    console.log('Emitting', data)
    this.socket.emit('addEvent', data)
  }
  public addEventResponse = () => {
    return Observable.create((observer) => {
      this.socket.on('addeventResponse', (data) => {
        console.log(data)
        observer.next(data)
      });

    })
  }

  //Disconnecting Socket:

  public disconnect = () => {
    this.socket.disconnect()
  }

  //Deleting Event:

  public deleteEvent = (data) => {
    this.socket.emit('deleteEvent', data)
  }
  public deleteEventResponse = () => {
    return Observable.create((observer) => {
      this.socket.on('deleteResponse', (data) => {
        observer.next(data);
      })
    })
  }
}
