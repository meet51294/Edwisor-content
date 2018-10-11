const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let phoneSchema = new Schema({
    phoneId: {
        type: String,
        unique :true
    },
    name: {
        type: String,
        default: 'NA'
    },
    manufacturer: {
        type: String,
        default: 'NA'
    },
    price: {
        type: String,
        default: 'NA'
    },
    displaySize: {
        type: String,
        default: "NA"
    },
    displayType: {
        type: String,
        default: "NA"
    },

    OS: {
        type: String,
        default: "NA"
    },
    processorCore: {
        type: String,
        default: "NA"
    },
    processorSpeed: {
        type: String,
        default: "NA"
    },
    storage: {
        type: String,
        default: "NA"
    },
    RAM: {
        type: String,
        default: "NA"
    },
    frontCamera: {
        type: String,
        default: "NA"
    },
    secondaryCamera: {
        type: String,
        default: "NA"
    },
    battery: {
        type: String,
        default: "NA"
    },
    warranty: {
        type: String,
        default: "NA"
    }



});
module.exports = mongoose.model('Smartphone', phoneSchema);