const mongoose = require('mongoose')
const Schema = mongoose.Schema
let chatSchema = new Schema({
    chatId:{
        type:String,unique:true
    },
    senderName:{
      type:String,default:''
    },
    senderId:{
        type:String , default:''
    },
    message : {
        type:String,default:''
    },
    chatRoom:{
        type:String,default:true
    },
    createdOn:{
        type:Date,default:Date.now()
    },
    
})
module.exports = mongoose.model('chat',chatSchema)