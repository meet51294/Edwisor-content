const mongoose = require('mongoose')
const Schema = mongoose.Schema
const authSchema = new Schema({

    userId:{
        type:String,
        unique:true
    },
    authToken:{
        type:String

    },
    tokenSecret:{
      type:String
    },
    tokenGenerationTime:{
      type:Date
    }
    
})

module.exports=mongoose.model('auth',authSchema)