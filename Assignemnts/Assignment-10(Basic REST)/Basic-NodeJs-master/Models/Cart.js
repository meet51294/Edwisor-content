const mongoose=require('mongoose')
const Schema = mongoose.Schema;
var cartSchema = new Schema({
    orderid:{
        type:String
    },
    quantity:{
        type:Number
    },
    productname:{
        type:String
    }
})
module.exports= mongoose.model('Cart',cartSchema);