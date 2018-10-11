const mongoose = require('mongoose')
const Schema = mongoose.Schema
let UserSchema = new Schema({
    userId:{
        type:String,
        default:'',
        index:true,
        unique:true
    },
    firstName:{
        type:String,
        default:''
    },
    lastName:{
        type:String,
        default:''
    },
    password:{
        type:String
    },
    mobileNumber:{
        type:Number,
        default:0
    },
    email:{
        type:String,
        default:'',
        unique:true
    }
})

module.exports = mongoose.model('User',UserSchema);

