import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies'
import { HttpService } from './../../http.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  public friendId: String;
  public friendName: String;
  public allLists;
  public listName: String;
  public listId: String;
  public name: String;
  public description: String;
  public tasks;
  public taskName;
  constructor(public httpService: HttpService, public toastr: ToastrService) { }

  ngOnInit() {
    this.friendId = Cookie.get("friendId");
    this.friendName = Cookie.get("friendName");
    this.getAllTasklist();
    this.getAlltask();
  }

  //Getting All Task List:

  public getAllTasklist = () => {
    this.httpService.getAlltodo().subscribe((response: any) => {
      this.allLists = response.data;
      console.log("response", this.allLists)
    }, (err) => {
      this.toastr.error("Error Occured While Retrieving Lists")
    })
  }

  //Selecting List:

  public selectList = (name, id) => {
    this.listName = name;
    this.listId = id;
  }

  //Adding New List:

  public addnewList = () => {
    let data = {
      name: this.name,
      description: this.description,
      createdBy: this.friendId
    }
    this.httpService.createTodo(data).subscribe((data: any) => {
      this.toastr.success(data.message)
      this.getAllTasklist();
    }, (err) => {
      this.toastr.error("List Not Created");
    })

  }

  //Deleting list:
  public deleteList=(id)=>{
    this.httpService.removetodolist(id).subscribe((apiResponse:any)=>{
      this.toastr.success(apiResponse.message);
      this.getAllTasklist();
      this.listName=""
    },err=>{
      this.toastr.error("List Not Deleted")
    })
    this.httpService.deleteMany(id).subscribe((apiResponse:any)=>{
      this.toastr.success(apiResponse.message)
      this.getAlltask();
    },err=>{
      this.toastr.error("Tasks Not Deleted")
    })
  }
  public getAlltask=()=>{
    this.httpService.getTasks().subscribe((data:any)=>{
     this.tasks=data.data;
     console.log(this.tasks)
    })  
  }
public createTask=()=>{
  if(this.listId==""||this.listId==undefined||this.listId==null){
    this.toastr.warning("List Not Selected")
  }
  
  else if(this.taskName==""||this.taskName==undefined||this.taskName==null){
    this.toastr.warning("Task Is empty")
  }
  else{
  let data={
    listid:this.listId,
    taskName:this.taskName

  }
  this.httpService.createnewtask(data).subscribe((apiResponse:any)=>{
    this.toastr.success(apiResponse.message)
    this.taskName=""
    this.getAlltask();
  
  },err=>{
    this.toastr.error("Unable To Create Task")
  })
}
}
public deletetask=(id)=>{
  this.httpService.deletesingletask(id).subscribe((apiResponse:any)=>{
    this.toastr.success(apiResponse.message)
    this.getAlltask();
  },(err)=>{
    this.toastr.error("Not Deleted");
  })

}
}
