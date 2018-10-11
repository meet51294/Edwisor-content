const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const taskSchema = new Schema({
    listid: {
        type: String,
        required: true
    },
    taskName: {
        type: String,
        required: true
    },
    taskid: {
        type: String,
        unique: true
    }
});
module.exports = mongoose.model("task", taskSchema);