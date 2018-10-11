const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId:{type:String,unique:true,index:true},
    email:{type:String , unique:true},
    textPassword:String,
    password:String,
    firstName:String,
    lastName:String,
    mobileNumber : String,
    countryCode:String,
    requests:[],
    friends:[],
    status:Number
});


module.exports = mongoose.model("userInfo",userSchema);
