import { Injectable } from '@angular/core';
import * as  io from 'socket.io-client'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  public baseUrl = "http://todolist-api.mohitnagpure.com/";
  //Handshake
  public socket = io(this.baseUrl)

  constructor() {}
   
//Sending Request:

public sendrequest=(data)=>{
  this.socket.emit("request",data);
}
public responseFirst=()=>{
  return Observable.create((observer)=>{
    this.socket.on("responseA",(data)=>{
      observer.next(data);
    })
  })
}
public responseSecond=()=>{
  return Observable.create((observer)=>{
    this.socket.on("responseB",(data)=>{
      observer.next(data);
    })
  })
}
public savereq=()=>{
  return Observable.create((observer)=>{
    this.socket.on("savereq",(data)=>{
      observer.next(data);
    })
  })
}
public rejectresponse=()=>{
  return Observable.create((observer)=>{
    this.socket.on("rejecting",(data)=>{
      observer.next(data);
    })
  })
}
public acceptresponse=()=>{
  return Observable.create((observer)=>{
    this.socket.on("accepting",(data)=>{
      observer.next(data)
    })
  })
  }
  
//Rejecting Request:

public rejectrequest=(data)=>{
  this.socket.emit("reject",data);
}

//Accepting Request:

public acceptrequest=(data)=>{
  this.socket.emit("accept",data);
}

//Removing Friend:
public unfriend=(data)=>{
  this.socket.emit("unfriend",data);
}
public unfrndResponse=()=>{
  return Observable.create((observer)=>{
    this.socket.on("removed",(data)=>{
      observer.next(data);
    })
  })
}
}
