const mongoose = require("mongoose")
const Schema = mongoose.Schema
const personSchema = new Schema({

    firstName: String,
    lastName: String,
    userId: {
        type: String,
        unique: true
    },
    contactNumber: String,
    countryCode: String,
    email: {
        type: String,
        unique: true
    },
    hashPassword: String,
    password: String,
    admin: Boolean
})
module.exports = mongoose.model("person", personSchema)