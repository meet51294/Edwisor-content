const socket = io('http://localhost:3000');
const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IkhKZ3IweE0wTSIsImlhdCI6MTUyNTk3MjUzNjMzMSwiZXhwIjoxNTI2MDU4OTM2LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJJZCI6IkJrMGlWTnkwTSIsImZpcnN0TmFtZSI6IkphbWVzIiwibGFzdE5hbWUiOiJXYWxrZXIiLCJtb2JpbGVOdW1iZXIiOjg5NTAzMjM1NzEsImVtYWlsIjoic2tha3UzNDlAZ21haWwuY29tIn19.6d9vejlgCKkHz_lbE0zJUxlhQDHrU5TwYFp4TUghDsM"
const userId= "rJwNpUn6M"

let chatMessage = {
  createdOn: Date.now(),
  receiverId: 'HyFVlhq6f',
  receiverName: "Pulkit",
  senderId: userId,
  senderName: "James"
}

let chatSocket = () => {
  socket.on('verifyUser', (data) => {
     console.log(data)
    console.log("Socket trying to verify user");
    socket.emit("set-user", authToken);
  });

  socket.on(userId, (data) => {
    console.log("You received a message from " + data.senderName)
    console.log(data.message)
  });

  socket.on("online-user-list", (data) => {
    console.log("Online user list is updated")
    console.log(data)
  });

  $("#send").on('click', function () {
    let messageText = $("#messageToSend").val()
    chatMessage.message = messageText;
    socket.emit("chat-msg",chatMessage)
  })

  $("#messageToSend").on('keypress', function () {
    socket.emit("typing","Alex")
  })

  socket.on("typing", (data) => {
    console.log(data + "is typing")
  });

}// end chat socket function

chatSocket();
