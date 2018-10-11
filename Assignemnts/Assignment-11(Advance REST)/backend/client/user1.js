const socket = io('http://localhost:3000/chatroom');
//const authToken= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IkJrWHlwZ00weiIsImlhdCI6MTUyNTk3MjE4Njc5NCwiZXhwIjoxNTI2MDU4NTg2LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJJZCI6IlN5czhHV2tSTSIsImZpcnN0TmFtZSI6IlB1bGtpdCIsImxhc3ROYW1lIjoiU2FwcmEiLCJtb2JpbGVOdW1iZXIiOjcwMTU4MzQ5ODcsImVtYWlsIjoicHNhcHJhMTBAZ21haWwuY29tIn19.BfAgQtdgLLYLu0xApXvE2QAiFglO9O3ythznWz_Z9eQ"
//const userId = "HyFVlhq6f"

let chatMessage = {
    createdOn:Date.now(),
    receiverId:"rJwNpUn6M",
    receiverName:"James",
    senderId:userId,
    senderName:"Pulkit"
}

let chatSocket = () =>{
socket.on('verifyUser',(data)=>{
    console.log(data)
    console.log("Socket Trying To Verify The User")
    socket.emit("set-user",authToken)
});

socket.on(userId,(data)=>{
    console.log("You Received A Message from " + data.senderName)
    console.log(data.message);
});

socket.on('online-user-list',(data)=>{
    console.log("Online User List Updated")
    console.log(data);
})

socket.on("typing",(data)=>{
console.log(data + "is typing...")
})

$("#send").on('click',function(){
    let messageText =$("#messageToSend").val()
    chatMessage.message=messageText;
    socket.emit("chat-msg",chatMessage)
})

$("#messageToSend").on('keypress',function(){
    socket.emit("typing","Pulkit")
})

}
chatSocket();