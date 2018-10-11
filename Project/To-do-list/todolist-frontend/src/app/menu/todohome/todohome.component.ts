import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { ToastrService } from 'ngx-toastr';
import { Cookie } from 'ng2-cookies';
import { Router } from '@angular/router';
import { SocketService } from './../../socket.service';


@Component({
  selector: 'app-todohome',
  templateUrl: './todohome.component.html',
  styleUrls: ['./todohome.component.css']
})


export class TodohomeComponent implements OnInit {
  public name: String;
  public description: String;
  public createdBy;
  public response = [];
  public task;
  public taskdata;
  public users;


  //Variables Used With Cookies:

  public username: String;
  public userId: String;
  public listname: String;
  public listId: String;



  constructor(public httpService: HttpService, public socketService: SocketService, public toastr: ToastrService, public router: Router) {

  }


  ngOnInit() {
    this.getAlltodoList();
    this.username = Cookie.get("fullName");
    this.userId = Cookie.get("id");
    this.createdBy = this.userId;
    this.getAlltasks();
    this.getAllUsers();
    this.firstResponse();
    this.secondResponse();
    this.rejectRes();
    this.acceptRes();
    this.saveRequest();
    this.deleteresponse()
  }

  //Navigate To Login:

  public gotologin = () => {
    this.router.navigate(['/login'])
  }

  //Adding A New Todo list:

  public newtodo = () => {
    if (!this.name) {
      this.toastr.warning("Name is required");
    }
    else {
      let values = {
        name: this.name,
        description: this.description,
        createdBy: this.createdBy
      }
      this.httpService.createTodo(values).subscribe((apiResponse: any) => {
        if (apiResponse.status == 200) {
          this.toastr.info("Task-List Created");
          this.name = ""
          this.description = ""
          this.response = [];
          this.getAlltodoList();

        }
      }, (error) => {
        console.log("Error Occured")
      })
    }
  }

  //Deleting a todolist:

  public deletetodoList = (id) => {
    this.httpService.removetodolist(id).subscribe((apiResponse: any) => {
      console.log(apiResponse);
      Cookie.delete('listid');
      Cookie.delete('listname');
      this.listname = "";
      this.toastr.success(apiResponse.message);
      this.response = [];
      this.getAlltodoList();

    }, (err) => {
      this.toastr.error("Unable to Delete Blog")
    })

    this.httpService.deleteMany(id).subscribe((apiResponse: any) => {
      this.toastr.success(apiResponse.message);
      Cookie.delete('listid');
      Cookie.delete('listname');
     
      this.getAlltasks();
    }, (err) => {
      this.toastr.error("Error Occured");
    })

  }

  //Getting Alltodolist:

  public getAlltodoList = () => {
    console.log(this.response)
    this.httpService.getAlltodo().subscribe((apiResponse: any) => {
      for (let index in apiResponse.data) {
        if (apiResponse.data[index].createdBy == this.userId)
          this.response.push(apiResponse.data[index])
        else
          console.log("Does Not Match");
      }
      console.log(this.response);
    }, (err) => {
      console.log("Error Occured")
    })
  }

  //Selecting A List:

  public selectlist = (listid, listname) => {
    Cookie.set("listid", listid);
    Cookie.set("listname", listname);
    this.listname = Cookie.get("listname");
    this.listId = Cookie.get("listid");
    this.toastr.success(this.listname + " Selected");
  }

  //Getting All Tasks:

  public getAlltasks = () => {
    this.httpService.getTasks().subscribe((apiResponse: any) => {

      this.taskdata = apiResponse.data
      console.log(this.taskdata);
    }, (err) => {
      console.log(err);
    })
  }

  //Creating A New Task:

  public createtask = () => {
    if (this.listId == undefined) {
      return this.toastr.warning("Select Task List");
    }
    else {

    }
    if (this.task == undefined || this.task == "" || this.task == null) {
      return this.toastr.warning("Task Cannot be empty")
    }
    else {
      let data = {
        listid: this.listId,
        taskName: this.task
      }
      this.httpService.createnewtask(data).subscribe((apiResponse: any) => {
        this.task = "";
        this.getAlltasks();
        this.toastr.success("Task Created");
      }, (err) => {
        this.toastr.error("Error Occured");
      })
    }
  }

  //Deleting A Task:

  public deletetask = (id) => {
    this.httpService.deletesingletask(id).subscribe((apiResponse: any) => {
      if (apiResponse.status == 200) {
        this.toastr.success(apiResponse.message)
        this.getAlltasks();
      }
    }, (err) => {
      console.log(err);
      this.toastr.error("Unable to delete")
    })
  }

  //Getting All Users From Database:

  public getAllUsers = () => {
    this.httpService.getAllpeople().subscribe((apiResponse: any) => {
      this.users = apiResponse.data;
      console.log(this.users);
    })
  }
  //Logout:
  public logout=()=>{
    Cookie.delete("listid")
    Cookie.delete("listname")
    Cookie.delete('fullName');
    Cookie.delete('id')
    Cookie.delete("token");
    this.gotologin()
  }

  //Sending The Request:

  public sendreq = (id) => {
    let data = {
      receiverId: id,
      senderId: this.userId,
      senderName: this.username
    }
    this.socketService.sendrequest(data)
  }

  //Rejecting The Request:

  public rejectreq = (id) => {
    let data = {
      receiverId: this.userId,
      senderId: id,
    }
    this.socketService.rejectrequest(data)
  }

  //Accepting The Request:

  public acceptreq = (id, name) => {
    let data = {
      senderId: id,
      receiverId: this.userId,
      receiverName: this.username,
      senderName: name
    }
    this.socketService.acceptrequest(data);
  }
  
  //Deleting A Friend:

  public deletefriend=(id)=>{
    let data={
      friendId:id,
      myId:this.userId
    }
    this.socketService.unfriend(data)
  }

  //Viewing Friend:
  public friendView=(name,id)=>{
    Cookie.set("friendId",id);
    Cookie.set("friendName",name);
  }

  //Response of Friend Requests:

  public firstResponse = () => {
    this.socketService.responseFirst().subscribe((apiResponse) => {
      this.toastr.error(apiResponse)
    })
  }

  public secondResponse = () => {
    this.socketService.responseSecond().subscribe((apiResponse) => {
      this.toastr.error(apiResponse)
    })
  }

  public rejectRes = () => {
    this.socketService.rejectresponse().subscribe((apiResponse) => {
      this.toastr.warning("Request Rejected");
      this.getAllUsers();
    })
  }

  public acceptRes = () => {
    this.socketService.acceptresponse().subscribe((apiResponse) => {
      this.toastr.success(apiResponse);
      this.getAllUsers();
    })
  }

  public saveRequest = () => {
    this.socketService.savereq().subscribe((apiResponse) => {
      this.toastr.success(apiResponse);
    })
  }
  public deleteresponse=()=>{
    this.socketService.unfrndResponse().subscribe((apiResponse)=>{
      this.toastr.success(apiResponse)
      this.getAllUsers();
    })
  }

}