const express = require('express');
const appConfig = require('./AppConfiguration/appConfig')
const mongoose =require('mongoose')
const app =express();
const route = require('./Routes/router')
const bodyParser = require('body-parser');
const socketLib = require('./Library/socketLib')
const http = require('http')

const server = http.createServer(app)
server.listen(appConfig.port)

const socketServer = socketLib.setServer(server);
app.use(express.static('./client'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Creating A Connection With MongoDb:

mongoose.connect(appConfig.db.uri)
//Cors Origin
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Verifying The Connection:

mongoose.connection.on('open',(err)=>{
    if(err){
        console.log("Error In Establishement Of Connection")
    }
    else{
        console.log("Database Connection Established")
    }
})
route.setRoutes(app)



