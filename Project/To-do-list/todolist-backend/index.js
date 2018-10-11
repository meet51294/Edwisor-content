const express = require("express");
const app = express();
const config = require("./App-Configuration/Configuration");
const routes = require("./Routes/Routing");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const socketLib = require('./Libraries/Socketlib')
var http = require("http")

var server = http.createServer(app)
server.listen(config.port);
socketLib.setServer(server)


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


mongoose.connect(config.db.uri);
mongoose.connection.on("open", function (err) {
    if (err) {
        console.log("Error Occured!Connection Not Established");
    }
    else {
        console.log("Database Connection Established!");
    }
});

routes.setRouters(app);
