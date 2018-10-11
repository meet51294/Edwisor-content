import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AppService } from './../../app.service';
import { SocketService } from './../../socket.service';
import { Router } from '@angular/router'
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css'],
  providers: [SocketService]
})
export class ChatBoxComponent implements OnInit {
  public authToken: any;
  public disconnectedSocket: any;
  public userList: any = [];
  public messageText: any;
  public userInfo: any;
  public messageList = [];
  public userName;
  public inviteEmail;

  constructor(public appservice: AppService, public socketservice: SocketService,
    public router: Router, private toastr: ToastsManager,
    vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);

  }

  ngOnInit() {
    this.authToken = Cookie.get('authToken');
    this.userInfo = this.appservice.getUserInfoFromLocalStorage();
    this.userName = this.userInfo.firstName + " " + this.userInfo.lastName
    this.verifyUserConfirmation();
    this.getOnlineUsers()
    this.getMessage()
    this.response()


  }
  //Verifying The User:
  public verifyUserConfirmation = () => {
    this.socketservice.verifyUser().subscribe((data) => {
      this.disconnectedSocket = false;
      this.socketservice.setUser(this.authToken);
      console.log("User Is Verified")
    });
  }
  //Getting Online Users-List:
  public getOnlineUsers = () => {
    this.socketservice.onlineUserList().subscribe((receiveduserList) => {
      this.userList = []
      for (let x in receiveduserList) {
        let temp = { 'id': x, 'name': receiveduserList[x].fullName, 'userId': receiveduserList[x].userId }
        this.userList.push(temp)
      }
      console.log(this.userList)
    });
  }
  //Sending Message:
  public sendMessage: any = () => {
    if (this.messageText) {
      let chatMsgObject = {
        senderName: this.userName,
        senderId: this.userInfo.userId,
        message: this.messageText,
        createdOn: new Date()
      }
      console.log(chatMsgObject)
      this.socketservice.SendTextMessage(chatMsgObject);

      this.pushToChatWindow(chatMsgObject);


    }
    else {
      this.toastr.warning("Text Message Is Empty")
    }

  }
  // Pushing Data To Chat Window:
  public pushToChatWindow: any = (data) => {
  
    this.messageText = "";
    this.messageList.push(data);

  }
  //Getting The Message:
  public getMessage: any = () => {
    this.socketservice.receiveTextMessage().subscribe((data) => {
      console.log(data.message)
      this.messageList.push(data);
      this.toastr.info("Got A Message From: " + data.senderName)

    })
  }
  //Invitation Funtionality:
  public invite = () => {
    if (!this.inviteEmail) {
      this.toastr.warning("No Email")
    }
    else {
      this.socketservice.sendInvite(this.inviteEmail)
    }
  }
  public response = () => {
    this.socketservice.response().subscribe((data) => {
      this.toastr.success(data)
    })
  }

}

