const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ListSchema = new Schema({

    id: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    createdBy: String,
    group: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("List", ListSchema);
