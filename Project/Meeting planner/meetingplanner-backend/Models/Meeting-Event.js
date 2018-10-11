const mongoose = require("mongoose")
const Schema = mongoose.Schema
const eventSchema = new Schema({
    personId: String,
    id: {
        type: String,
        unique: true
    },
    title: String,
    details: String,
    start:String,
    end:String,
    startTime:String,
    endTime: String,
    address: {
        type: String,
        default: ''
    },
    online: Boolean,
    via: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model('event', eventSchema);
