const express = require('express');
const mongoose = require('mongoose');
const appConfig = require('./Config/appConfig');
const bodyParser = require('body-parser');
const app = express();
const ErrorMiddleware = require('./MiddleWare/appErrorhandler');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(ErrorMiddleware.globalErrorHandler);
mongoose.connect(appConfig.db.uri)
mongoose.connection.on('open', (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("DataBase Connection Successful")
    }
})
const route = require('./Routes/Url');
route.setRoute(app);
app.use(ErrorMiddleware.globalNotFoundHandler)

app.listen(appConfig.port, () => {
    console.log("Listening On Port 8080")
})