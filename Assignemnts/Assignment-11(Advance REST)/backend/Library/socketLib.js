const socketio = require('socket.io');
const events = require('events');
const eventEmitter = new events.EventEmitter();
const tokenLib = require('./tokenLib');
const shortid = require('shortid');
const ChatModel = require('./../Models/Chat')
const nodemailer = require('nodemailer')


let setServer = (server) => {
    let allOnlineUsers = []
    let io = socketio.listen(server)
    let myIo = io.of('')
    myIo.on('connection', (socket) => {
        console.log("on connection -- emitting verify user")
        let str = "Verifying The User..."
        socket.emit("verifyUser", str)
        socket.on('set-user', (authToken) => {
            console.log("Set User Was Called")
            tokenLib.verifyClaimWithoutSecret(authToken, (err, user) => {
                if (err) {
                    socket.emit('auth-error', { status: 500, error: "Please Provide Correct Details" })
                }
                else {
                    console.log("User Is Verfied")
                    let currentUser = user.data
                    socket.userId = currentUser.userId
                    let fullName = `${currentUser.firstName} ${currentUser.lastName}`
                    console.log(`${fullName} is online`);           
                    let userObj = { userId: currentUser.userId, fullName:fullName}
                    allOnlineUsers.push(userObj)
                    console.log(allOnlineUsers)
                    socket.room = 'edChat'
                    socket.join(socket.room)
                    socket.to(socket.room).broadcast.emit('online-user-list', allOnlineUsers);
                }
            })
        })//end of listening user event


        socket.on('disconnect', () => {
            console.log("user is disconnected");
            console.log(socket.userId);
            var removeIndex = allOnlineUsers.map(function (user) { return user.userId; }).indexOf(socket.userId);
            allOnlineUsers.splice(removeIndex, 1)
            console.log(allOnlineUsers)
            socket.to(socket.room).broadcast.emit('online-user-list',allOnlineUsers);
            socket.leave(socket.room)
 

        }) // end of on disconnect


        socket.on("chat-msg",(data)=>{
        console.log("Chat Message Was Called")
        console.log(data);
        data['chatId']=shortid.generate();
        //event to save chat
        setTimeout(function(){
            eventEmitter.emit('save-chat',data)
        },2000)
		console.log("Received The Message..Now Emitting")
        socket.broadcast.to(socket.room).emit('chat',data)
		
        })


        socket.on("typing",(name)=>{
            socket.to(socket.room).broadcast.emit("type" , name)
            });
			socket.on('invite',(email)=>{
				
                                //Sending Nodemail
                                let transporter = nodemailer.createTransport({
                                    host: 'smtp.gmail.com',
                                    port: 587,
                                    secure: false,
                                    auth: {
                                        user: "skaku349@gmail.com",
                                        pass: "7015827942"
                                    },
                                    tls: {
                                        rejectUnauthorized: false
                                    }
                                });

                                let mailOptions = {
                                    from: '"ADMIN"<skaku349@gmail.com>',
                                    to: email,
                                    subject: 'Join SOCKET-CHAT!',
                                    text: "Hey Friend!Join Socket-Chat,Its a Free Online ChatApplication",
                                };
                                transporter.sendMail(mailOptions, (error, info) => {
                                    if (error) {
                                        return console.log(error);
                                    }
									socket.emit('success',"Mail Sent")
                                    console.log('Message sent: %s', info.messageId);
                                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
									
                                });

                            
})
  

  })

    
}

//DataBase Operations To Save Chat
eventEmitter.on('save-chat',(data)=>{
    let newChat = new ChatModel({
        chatId:data.chatId,
        senderName:data.senderName,
        senderId:data.senderId,
        message:data.message,
        chatRoom :data.chatRoom,
        createdOn:data.createdOn

    });
    newChat.save((err,result)=>{
        if(err){
            console.log('ERROR OCCURED'+err)
        }
        else if(result == undefined || result ==null||result=='')
        {
            console.log("Chat Is Not Save")
        }
        else{
            console.log("Chat Saved")
            console.log(data)
        }
    })
})


module.exports = {
    setServer: setServer
}