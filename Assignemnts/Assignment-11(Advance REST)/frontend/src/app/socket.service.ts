import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import * as io from 'socket.io-client'

@Injectable()
export class SocketService {
  public baseUrl = "http://localhost:3000/"
  private socket;
  constructor(http: HttpClient) {
    //Handshake
    this.socket = io(this.baseUrl)
  }


  //Verifying User
  public verifyUser = () => {
    return Observable.create((observer) => {
      this.socket.on('verifyUser', (data) => {
        observer.next(data);
      })
    })
  }


  //Setting User
  public setUser = (authToken) => {
    this.socket.emit("set-user", authToken)
  }


  //Getting User-List:
  public onlineUserList = () => {
    return Observable.create((observer) => {
      this.socket.on('online-user-list', (userList) => {
        console.log(userList);
        observer.next(userList);
      })
    })
  }

  //Sending The Message Object:
  public SendTextMessage = (chatMsgObject) => {
    this.socket.emit('chat-msg', chatMsgObject)
  }

  //Receiving The Text Message:
  public receiveTextMessage = () => {
    return Observable.create((observer) => {
      this.socket.on('chat', (message) => {
        observer.next(message);
      });
    })
  }

  //Sending Invitation
  public sendInvite = (email) => {
    this.socket.emit('invite', email)
  }
  public response = () => {
    return Observable.create((observer) => {
      this.socket.on("success", (data) => {
        observer.next(data);

      })
    })
  }
//Switching To Different Chat Room



}

