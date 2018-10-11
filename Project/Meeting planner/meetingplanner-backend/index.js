const express = require("express")
const app = express();
const mongoose = require('mongoose');
const routes =require('./Routing/Routes')
const appConfig = require("./App-Configuration/appConfig")
const bodyparser = require('body-parser');
var http=require("http")
const socketLib=require('./Libraries/socketLib')

var server = http.createServer(app)
server.listen(appConfig.port)
socketLib.setServer(server);

//Body-Parser Middleware

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());

//CORS Middleware:

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//MongoDB Connection:

mongoose.connect(appConfig.db.uri)
mongoose.connection.on("open", (error) => {
    if(error) {
        console.log(error)
    }
    else {
        console.log("Application Is Running..")
        console.log("Connection to MongoDB Established")
    }
})

routes.setRouters(app)