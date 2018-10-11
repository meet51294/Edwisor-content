const socketio = require('socket.io');
const userModel = require('./../Models/User');
const tokenLib = require('./../Libraries/token');
const listModel = require('./../Models/List');
const taskModel = require('./../Models/Task');
const shortid = require("shortid")


let setServer = (server) => {

    let io = socketio.listen(server);
    let myio = io.of('')
    let allOnlineUsers = [];

    myio.on('connection', function (socket) {
        //Verifying-User:

        socket.emit("verify-user", "Please Provide AuthToken For Verification")
        socket.on("set-user", (authToken) => {
            tokenLib.verifyClaimWithoutSecret(authToken, (err, userdata) => {
                if (err) {
                    socket.emit('auth-error', "Please Provide Correct Details")
                }
                else {
                    console.log("User Is Verified");
                    let currentUser = userdata.data
                    socket.id = currentUser.userId
                    let fullName = `${currentUser.firstName} ${currentUser.lastName}`
                    console.log(`${fullName} is online`);
                    let userObj = { userId: currentUser.userId, fullName: fullName }
                    allOnlineUsers.push(userObj)
                    console.log(allOnlineUsers)
                    socket.broadcast.emit("onlineUsers", allOnlineUsers)

                }

            })
            socket.on("disconnect", () => {
                console.log("user is disconnected");
                console.log(socket.id);
                var removeIndex = allOnlineUsers.map(function (user) { return user.userId; }).indexOf(socket.id);
                allOnlineUsers.splice(removeIndex, 1)
                console.log(allOnlineUsers)
                socket.broadcast.emit('onlineUsers', allOnlineUsers);
                socket.leave(socket.room)


            })
        })
        //List Data:


        //Creating A New List: 
        socket.on("createList", (data) => {
            console.log(data)
            let id = shortid.generate()
            let newList = new listModel()
            newList.id = id
            newList.name = data.name
            newList.description = data.description
            newList.createdBy = data.createdBy
            newList.group = data.group
            console.log(newList);
            newList.save((err, result) => {
                if (err)
                    console.log(err);
                else
                    socket.broadcast.emit('createList-res', result.createdBy + " created A New List");
            })
        })
        //Creating A Task:
        socket.on("createtask", (data) => {
            console.log(data)
            let id = shortid.generate();
            let newTask = new taskModel();
            newTask.taskid = id;
            newTask.taskName = data.taskName;
            newTask.listid = data.listId;
            newTask.save((err, result) => {
                if (err)
                    console.log(err)
                else
                    console.log(result);
                socket.broadcast.emit("createtask-res", "New Task Added To List");
            })
        })
        //Deleting Task
        socket.on("deleteTask", (data) => {
            console.log(data)
            taskModel.findOneAndRemove({ taskid: data.id }, (err, result) => {
                if (err) {
                    console.log(err)
                }
                else {
                    socket.broadcast.emit("deleteResponse", "Task Deleted By:" + data.name)
                }
            })
        })
        //Deleting Task List
        socket.on("deletelist", (data) => {
            listModel.findOneAndRemove({ id: data.id }, (err, result) => {
                if (err)
                    console.log(err)
                else {
                    socket.broadcast.emit('deletelistres', data.name + " deleted")
                }
            })
        })

        //Receiving Request:

        socket.on('request', (data) => {
            userModel.findOne({ "userId": data.receiverId }, (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    //Checking Request Already Present Or Not:

                    for (x of result.requests) {
                        if (x.senderId == data.senderId) {
                            return socket.emit("responseA", "Request Sent Already");
                        }
                        else { }
                    }
                    //Checking IF User Is Already Friend:
                    for (x of result.friends) {
                        if (x.friendId == data.senderId) {
                            return socket.emit("responseB", "User Already A Friend");
                        }
                    }

                    //Saving Requests:

                    let socketdata = {
                        receiverId: data.receiverId,
                        senderId: data.senderId,
                        senderName: data.senderName
                    }

                    result.requests.push(socketdata)
                    socket.emit("savereq", "Request Send");
                    result.save((err, result) => {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            console.log(result);
                        }
                    })
                }
            })
        })
        //Rejecting Request
        socket.on("reject", (data) => {
            console.log(data)
            userModel.findOne({ "userId": data.receiverId }, (err, result) => {
                if (err) {
                    console.log(err)
                }
                else {
                    for (x of result.requests) {
                        if (x.senderId == data.senderId) {
                            var index = result.requests.indexOf(x);
                            result.requests.splice(index, 1)
                        }
                        else { }
                    }

                }
                result.save((err, result) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log(result);
                        socket.emit("rejecting", "Request Rejected");
                    }
                })

            })
        })
        //Accepting Request
        socket.on("accept", (data) => {
            console.log(data);
            userModel.findOne({ "userId": data.receiverId }, (err, result) => {
                if (err) {
                    console.log(err)
                }
                else {
                    let socketdata = {
                        friendName: data.senderName,
                        friendId: data.senderId
                    }
                    result.friends.push(socketdata);

                    for (x of result.requests) {
                        if (x.senderId == data.senderId) {
                            var index = result.requests.indexOf(x);
                            result.requests.splice(index, 1)
                        }
                        else { }
                    }
                    result.save((error, result) => {
                        if (error) {
                            console.log(error)
                        }
                        else {
                            console.log(result)
                        }
                    })

                }
            })
            userModel.findOne({ "userId": data.senderId }, (err, result) => {
                if (err) {
                    console.log(err)
                }
                else {
                    let socketdata = {
                        friendId: data.receiverId,
                        friendName: data.receiverName
                    }
                    result.friends.push(socketdata);
                    result.save((error, result) => {
                        if (error) {
                            console.log(error)
                        }
                        else {
                            console.log(result);
                            socket.emit("accepting", "Request Accepted");
                        }
                    })
                }

            })
        })

        //Removing From FriendList:
        socket.on("unfriend", (data) => {
            userModel.findOne({ "userId": data.myId }, (err, result) => {
                if (err) {
                    console.log("Error Occured")
                    console.log(err)
                }
                else {
                    for (x of result.friends) {
                        if (x.friendId == data.friendId) {
                            var index = result.friends.indexOf(x);
                            result.friends.splice(index, 1)
                        }
                        result.save((err, result) => {
                            if (err) {
                                console.log(err)
                            }
                            else {
                                console.log("Friend Removed")
                            }
                        })
                    }
                }
            })
            userModel.findOne({ "userId": data.friendId }, (err, result) => {
                if (err) {
                    console.log("Error Occured")
                    console.log(err)
                }
                else {

                    for (x of result.friends) {
                        if (x.friendId == data.myId) {
                            var index = result.friends.indexOf(x);
                            result.friends.splice(index, 1)
                        }

                    }
                    result.save((err, result) => {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            console.log("Friend Removed")
                            socket.emit("removed", "Friend Removed");
                        }
                    })
                }
            })
        })
    })
}
module.exports = {
    setServer: setServer
}